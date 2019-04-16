import { Component, OnInit } from '@angular/core';
import { UserService } from './core/services/user.service';
import * as firebase from 'firebase';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'collectibles';

  constructor(public user: UserService) {

  }

  ngOnInit(): void {
    // firebase.initializeApp({
    //   apiKey: "AIzaSyC0G0nQ82f7F6_HJ4S-fQYDNnbIQYvxF_0",
    //   authDomain: "ng-collectibles.firebaseapp.com"
    // })
  }
}
