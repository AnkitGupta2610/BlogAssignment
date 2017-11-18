import { Injectable } from '@angular/core';
import { Http,Headers} from '@angular/http';
import 'rxjs/add/operator/map'
import {bootstrapItem} from "@angular/cli/lib/ast-tools";
import {forEach} from "@angular/router/src/utils/collection";
import {getResponseURL} from "@angular/http/src/http_utils";

const BASE_URL = 'http://localhost:3000/users/';
const  header = {headers: new Headers({'Content-Type':'application/json'})};

@Injectable()
export class UserService {

  //users:User[];

  constructor(private http: Http) {
    //this.users = [];
  }

  getUsersData(){
    return this.http.get(BASE_URL)
      .map(response => response.json())
  }

  getUserData(userId){
    return this.http.get(`${BASE_URL}${userId}`)
      .map(response => response.json())
  }

  updateUserData(data){
    return this.http.patch(`${BASE_URL}${data.id}`,data,header)
      .map(response => response.json())
  }

  /*authUserData(user){

    let userAuthenticated:boolean = false;
    //let existedUser:User;
    let userEntry:any;

      this.getUsersData()
        .subscribe((data) => {
          //this.users = data;
          console.log(data);
      });

    /*existedUser = this.checkUserNameExist(user);
    console.log(existedUser);
     if(existedUser != null){
        if(this.checkUserPassword(existedUser,user)){
          userAuthenticated = true;
        }
     }
     console.log(userAuthenticated);
     return userAuthenticated;
  }*/

  /*checkUserNameExist(user:User):User{

    let userExist:User;

    this.users.forEach(function (userEntry) {
      if(userEntry.username === user.username){
        userExist = userEntry;
      }
    })
    console.log(userExist);
    return userExist;
  }

  checkUserPassword(existedUser,user):boolean{
    let userPasswordMatched = false;
    if(this.users[existedUser].password == user.password){
      userPasswordMatched = true;
    }
    console.log(userPasswordMatched);
    return userPasswordMatched;
  }*/

}
