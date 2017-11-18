import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "../user-service/user.service";

@Component({
  selector: 'app-login-bar',
  templateUrl: './login-bar.component.html',
  styleUrls: ['./login-bar.component.css']
})
export class LoginBarComponent implements OnInit {

  @Input() users:any
  ;
  private logout:boolean;
  private login:boolean;
  private loggedInUser:any;

  constructor(private router:Router) {
    //localStorage.setItem("isloggedin","false");
    //localStorage.setItem("userId","0");
    this.checkUserLoggedIn();
  }
  ngOnInit() {
    if(localStorage.getItem("isloggedin") == "true"){
      console.log(localStorage.getItem("isloggedin"));
      this.router.navigate(['dashboard'])
    }
  }

  loginUser(name,password){
    let user = {
      username:name,
      password:password
    }
    let userEntry:any;
    let userAuthenticated:boolean = false;
    //userAuthenticated = this.authentication.authUserData(user);

    for(userEntry of this.users){
      console.log(userEntry.username);
      //console.log(user.username);
      if(userEntry.username === user.username && userEntry.password === user.password ){
        this.loggedInUser = userEntry;
        userAuthenticated = true;
        break;
      }
    }
    console.log(userAuthenticated);
    if(userAuthenticated){
      localStorage.setItem("isloggedin","true");
      localStorage.setItem("userId",this.loggedInUser.id);
      this.router.navigate(['dashboard']);
    }
  }

  logoutUser(){
    localStorage.setItem("isloggedin","false");
    localStorage.setItem("userId","0");
    this.router.navigate(['']);
  }

  checkUserLoggedIn(){
    if(localStorage.getItem("isloggedin")== "true"){
      this.logout = true;
    }
    else{
      this.login = true;
    }
  }
}
