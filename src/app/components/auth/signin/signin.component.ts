import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(public userService: UserService) { }

  ngOnInit() {
  }

  login(form : NgForm){
    const email = form.value.email;
    const password = form.value.password;
    console.log([email, password])
    this.userService.signIn(email, password);
  }

  // loginWithGmail() {
  //   this.userService.signInWithGmail()
  // }
}
