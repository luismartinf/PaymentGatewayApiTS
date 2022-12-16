import { Component, OnInit } from '@angular/core';
import { AuthserviceService } from '../shared/services/authservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public authService: AuthserviceService) { }
  currentuser = localStorage.getItem('user')
  ngOnInit(): void {
  }

}
