import { Component, OnInit, Input } from '@angular/core';
import { PaymethodsService } from 'src/app/shared/services/paymethods.service';
import { PaymentDetail} from 'src/app/shared/models/payment-detail.model' ;
import { NgForm } from '@angular/forms';
import { UsersDetail } from 'src/app/shared/models/users-detail.model';
import { UsersService } from 'src/app/shared/services/users.service';

@Component({
  selector: 'app-paymethods-form',
  templateUrl: './paymethods-form.component.html',
  styleUrls: ['./paymethods-form.component.css']
})


export class PaymethodsFormComponent implements OnInit {

  constructor(public service:PaymethodsService, public serviceusers:UsersService) { }
  
  paymethods: PaymentDetail[] = [  ];
  users: number[] = [  ];
  paymentstype:string [] =["Card","Account","Clabe"]

  ngOnInit(): void {
  this.serviceusers.refreshList()
    .then((reslen) => {
      this.serviceusers.list = reslen as UsersDetail[];
      this.serviceusers.list.forEach(user => this.users.push(user.UserId))
        });
   }   

  loadData():void{  this.service.refreshList()
    .then((res) => {  this.service.list = res as PaymentDetail[]; } ) ;}

   
  resetForm(form: NgForm) {
    form.form.reset();
    this.service.formData = new PaymentDetail();
  }

  updateRecord(form: NgForm) {
    this.service.putPaymethods().subscribe(
      {
        next: () => {this.resetForm(form);
          this.loadData();},
        error: (err) => { console.log(err); },
        complete: () => console.info('complete') 
      }
    )
  }
  
  insertRecord(form: NgForm) {
    this.service.postPaymethods().subscribe(
      {
        next: () => {this.resetForm(form);
          this.loadData();},
        error: (err) => { console.log(err); },
        complete: () => console.info('complete') 
      } 
    )
  }

  onSubmit(form: NgForm) {
    if (this.service.formData.PaymethodId == -1)
      this.insertRecord(form);
    else
    { this.updateRecord(form);}
    } 

}
