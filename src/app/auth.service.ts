import { Injectable } from '@angular/core';
import { auth } from 'firebase/app';
import { AngularFireAuth } from "@angular/fire/auth";
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(
    public afAuth: AngularFireAuth,
    private router: Router // Inject Firebase auth service
  ) { }

  // Sign in with Google
  GoogleAuth() {
    return this.AuthLogin(new auth.GoogleAuthProvider());
  }  

  // Auth logic to run auth providers
  AuthLogin(provider) {
    return this.afAuth.signInWithPopup(provider)
    .then((result) => {
        this.router.navigate(['calculo']);
    }).catch((error) => {
      this.router.navigate(['error']);
    })
  }

}