import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { UsersloginDetail } from '../models/userslogin-detail.model';
import { UserstokenDetail } from '../models/userstoken-detail.model';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {

  constructor(public http: HttpClient,public router: Router, ) { }
  userToken: UserstokenDetail= new UserstokenDetail();
  

  createToken(userData: UsersloginDetail) {
    this.http.post(`https://localhost:44379/api/Users/CreateToken`, userData)
    .subscribe(
      {
        next: (userT) => {this.userToken = userT as UserstokenDetail;
          console.log(this.userToken);
          return this.userToken;
        },
        error: (err) => { console.log(err); },
        complete: () => console.info('complete') 
      }
    )
  }  
  
  login(userData: UsersloginDetail) {   
  this.createToken(userData) 
  if (this.userToken && this.userToken.Token){  
      localStorage.setItem('token', this.userToken.Token);  
      localStorage.setItem('user', this.userToken.UserName);  
      localStorage.setItem('roles', this.userToken.Roles);  
      
      return true;  
      }  
  return false;  
  };  

  logout() {   
    localStorage.removeItem('token'); 
    localStorage.setItem('user', this.userToken.UserName);  
    localStorage.setItem('roles', this.userToken.Roles);  
    this.router.navigate(['/']);
  } 

  isLoggedIn() {   
    let jwtHelper = new JwtHelperService();  
    let token = localStorage.getItem('token');  
    
    if(!token)  
      return false;  
    
    let expirationDate = jwtHelper.getTokenExpirationDate(token);  
    let isExpired = jwtHelper.isTokenExpired(token);  
    
    // Now let's log the above values on the console.  
    console.log("Expiration", expirationDate);  
    console.log("isExpired", isExpired);  
    
    return !isExpired;  
  } 
}
