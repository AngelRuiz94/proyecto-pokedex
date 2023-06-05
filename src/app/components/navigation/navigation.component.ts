import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  dataUser: any;

  constructor(private afAuth: AngularFireAuth,
      private router: Router) { }

  ngOnInit(): void {
  }

  signOut() {
    this.afAuth.signOut().then(() => {
      this.router.navigate(['/login']);
    } );
    this.afAuth.signOut().then(function () {
      console.log('Saliendo...');
      window.location.reload();
    }).catch(function (error) {
      console.log(error);
    })
  }

}
