import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FirebaseCodeErrorService } from 'src/app/service/firebase-errors.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginUsuario: FormGroup;
  loading: boolean = false;

  constructor(
    private fb: FormBuilder,
    private afAuth: AngularFireAuth,
    private toastr: ToastrService,
    private router: Router,
    private firebaseError: FirebaseCodeErrorService
  ) {
    this.loginUsuario = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    })
  }

  ngOnInit(): void {
  }

  login() {
    const email = this.loginUsuario.value.email;
    const password = this.loginUsuario.value.password;

    this.loading = true;
    this.afAuth.signInWithEmailAndPassword(email, password).then((user) => {
      if(user.user?.emailVerified) {
        this.router.navigate(['/pokeHome']);
      } else {
        this.router.navigate(['/verify-mail']);
      }
    }).catch((error) => {
      this.loading = false;
      this.toastr.error(this.firebaseError.codeError(error.code), 'Error');
    })
  }

  emailRequired() {
    let required = (this.loginUsuario.get('email')?.hasError('required') && this.loginUsuario.get('email')?.touched) ? true : false;
    return required;
  }

  emailInvalid() {
    let invalid = (this.loginUsuario.get('email')?.hasError('email') && this.loginUsuario.get('email')?.touched) ? true : false;
    return invalid;
  }

  passwordInvalid() {
    let passInvalid = (this.loginUsuario.get('password')?.hasError('required') && this.loginUsuario.get('password')?.touched) ? true : false;
    return passInvalid;
  }
}
