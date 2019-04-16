import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit() {
  }
 
  register(form : NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    console.log([email, password])
    this.userService.signUp(email, password);
  }
  
}
