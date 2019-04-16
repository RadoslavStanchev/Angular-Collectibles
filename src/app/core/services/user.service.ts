import { Injectable } from '@angular/core';
import { of as observableOf, Observable } from 'rxjs';
import { AngularFireAuthModule, AngularFireAuth } from '@angular/fire/auth';
import { map, switchMap } from 'rxjs/operators';
import { auth } from 'firebase';
import { AngularFireDatabase } from '@angular/fire/database';
import * as firebase from 'firebase';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  token: string;

  uid = this.afAuth.authState.pipe(
    map(authState => {
      if (!authState) {
        return null;
      } else {
        return authState.uid;
      }
    })
  )

  isAdmin: Observable<boolean> = this.uid.pipe(
    switchMap(uid => {
      if (!uid) {
        return observableOf(false);
      } else {
        return this.db.object<boolean>('/admin/' + uid).valueChanges();
      }
    })
  )

  constructor(private router: Router, private toastr: ToastrService, private afAuth: AngularFireAuth, private db: AngularFireDatabase) {}


  signUp(email: string, password: string) {
    firebase.auth()
    .createUserWithEmailAndPassword(email, password)
      .then((data) => {
        this.toastr.success('Successfully signed up!', 'Success')
        this.router.navigate(['/auth/login']);
    })
    .catch((err) => {
        this.toastr.error(err.message, 'Error')
    })
  }

  signIn(email: string, password: string) {
    firebase.auth()
      .signInWithEmailAndPassword(email, password)
      .then((data) => {
        firebase.auth().currentUser.getIdToken().then((token : string) => {
            this.token = token;
        })

        this.router.navigate(['/collectibles/all']);
        this.toastr.success('Successfully logged in!', 'Success');
        })
        
      .catch((err) => {
            this.toastr.error(err.message, 'Error');
        })
  }

  logout() {
    firebase.auth().signOut()
            .then(() => {
                this.router.navigate(['/auth/login']);
                this.toastr.success('Successfully logged out!', 'Success');
                this.token = null;
            })
  }

  getToken() {
    firebase.auth().currentUser.getIdToken().then((token : string) => {
        this.token = token;
    })

    return this.token;
  }

  isAuthenticated() : boolean {
    return this.token != null;
  }



  // constructor(private afAuth: AngularFireAuth, private db: AngularFireDatabase) { }

  signInWithGmail() {
    this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider())
      .then((data) => {
        this.router.navigate(['/collectibles/all']);
        this.toastr.success('Successfully logged in!', 'Success');
      })
  }

  // logout() {
  //   this.afAuth.auth.signOut();
    
  // }
}
