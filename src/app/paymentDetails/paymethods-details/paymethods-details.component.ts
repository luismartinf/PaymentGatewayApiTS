import { Component, OnInit } from '@angular/core';
import { PaymentDetail } from 'src/app/shared/models/payment-detail.model';
import { PaymethodsService } from 'src/app/shared/services/paymethods.service';

@Component({
  selector: 'app-paymethods-details',
  templateUrl: './paymethods-details.component.html',
  styleUrls: ['./paymethods-details.component.css']
})
export class PaymethodsDetailsComponent implements OnInit {

  constructor(public service: PaymethodsService) { }

  loadData(){
    this.service.refreshList()
    .then((res) => {
      this.service.list = res as PaymentDetail[];
    }
    )
    ;
  }

  ngOnInit() {
    this.loadData();
  }

  populateForm(selectedRecord: any) {
    this.service.formData = Object.assign({}, selectedRecord);
  }

  onDelete(id:number) {
    if (confirm('Are you sure to delete this record ?')) {
      this.service.deletePaymethods(id)
        .subscribe({
          next: () => this.loadData(),
          error: (err) => { console.log(err); },
          complete: () => console.info('complete') 
      })
    }
  }

}