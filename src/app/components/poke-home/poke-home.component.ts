import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-poke-home',
  templateUrl: './poke-home.component.html',
  styleUrls: ['./poke-home.component.css']
})
export class PokeHomeComponent {
  dataUser: any;

  constructor(
    private afAuth: AngularFireAuth,
    private router: Router
  ) {
    /* SESIONES */
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.router.navigate(['/pokeHome'])

      } else {
        this.router.navigate(['/login'])
      }
    })
  }

  ngOnInit(): void {
    this.afAuth.currentUser.then(user => {
     /* if(user && user.emailVerified) {
        this.dataUser = user;
        console.log(user)
      } else {
        this.router.navigate(['/login']);
      }*/
    })
  }

  //SESIONES
  stateuser() {
    return this.afAuth.authState
  }

}
