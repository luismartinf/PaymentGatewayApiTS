import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthserviceService } from './authservice.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(  
    private router: Router,  
    private authservice: AuthserviceService) { }  
  
  canActivate() {  
    if(this.authservice.isLoggedIn()) return true;  
  
    this.router.navigate(['/']);  
    return false;  
  }  
 
}