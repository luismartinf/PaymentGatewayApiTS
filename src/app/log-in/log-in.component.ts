import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersloginDetail } from '../shared/models/userslogin-detail.model';
import { AuthserviceService } from '../shared/services/authservice.service';



@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
 
  ngOnInit(): void {
  }

  constructor( private router: Router, private route: ActivatedRoute, public authService: AuthserviceService) { }  
    
  @Input() userData:UsersloginDetail | undefined; 
  
  signIn(userData: UsersloginDetail) {  
    let result=this.authService.login(userData)
    if (result)  
      {  let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl');  
      this.router.navigate([returnUrl || '/home/']);  
     } 
      else    
      {    return alert("Invalid username and/or password, If you want register here")  }
  }  
}
