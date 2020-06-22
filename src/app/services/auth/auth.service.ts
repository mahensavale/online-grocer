// import { AppUser } from './../../interfaces/app-user';
// import { AngularFireAuth } from '@angular/fire/auth';
// import { Injectable } from '@angular/core';
// import * as firebase from 'firebase';
// import { Observable } from 'rxjs/Observable';
// import { ActivatedRoute, Router } from '@angular/router';
// import 'rxjs/add/operator/switchMap';
// import 'rxjs/add/observable/of';

// @Injectable()
// export class AuthService {

//   user$: Observable<firebase.User>;

//   constructor(private afAuth: AngularFireAuth,
//               private route: ActivatedRoute,
//               private router: Router,
//               private userService: UserService) {
//     this.user$ = afAuth.authState;
//   }

//   login() {
//     let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
//     localStorage.setItem('returnUrl', returnUrl);
//     // tslint:disable-next-line:no-trailing-whitespace

//     this.afAuth.signInWithRedirect (new firebase.auth.GoogleAuthProvider());
//   }

//   logout() {
//     this.afAuth.signOut();
//   }

//   get appUser$(): Observable<AppUser> {
//     return this.user$
//       .switchMap(user => {
//         if (user) return this.userService.get(user.uid);
//         return Observable.of(null);
//       });
//   }
// }