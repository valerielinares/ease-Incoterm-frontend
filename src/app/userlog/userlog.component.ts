import { Component, OnInit } from '@angular/core';
import { LoginSubmission, AuthService, SignupSubmission } from '../api/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userlog',
  templateUrl: './userlog.component.html',
  styleUrls: ['./userlog.component.css']
})
export class UserlogComponent implements OnInit {
  loginForm: LoginSubmission = new LoginSubmission();
  signupForm: SignupSubmission = new SignupSubmission()

  constructor(
    public myAuthServ: AuthService,
    public myRouterServ: Router
  ) { }

  ngOnInit() {
  }

  loginSubmit() {
    console.log(this.loginForm)
    // pass the form inputs to the service
    this.myAuthServ.postLogin(this.loginForm)
      .then((response) => {
        //redirect to the the contact page if successfull
        this.myRouterServ.navigateByUrl("/contact");
        alert("You logged in succesfully");
      })
      .catch((err) => {
        alert("Sorry! There was a problem with your login");
        console.log(err);
      })
  }

  signupSubmit() {
    this.myAuthServ.postSignup(this.signupForm)
      .then((response) => {
        this.myRouterServ.navigateByUrl("/contact");
        alert("You registered succesfully");
      })
      .catch((err) => {
        alert("Sorry, we could not sign you up")
        console.log(err)
      })
  }





}
