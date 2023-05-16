import { Injectable } from '@angular/core';
import firebase from 'firebase/app';
import 'firebase/auth';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private firebaseConfig = environment.firebase;

  constructor() {
    firebase.initializeApp(this.firebaseConfig);
  }

  signInWithEmailAndPassword(email: string, password: string) {
    return firebase.auth().signInWithEmailAndPassword(email, password);
  }

}