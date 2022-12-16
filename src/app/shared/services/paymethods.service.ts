import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { PaymentDetail } from '../models/payment-detail.model';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PaymethodsService {

  formData: PaymentDetail = new PaymentDetail ();
  readonly baseURL = 'https://localhost:44379/api/Paymethods';
  list!: PaymentDetail[];

  constructor(private http: HttpClient) { }

  postPaymethods() {
    return this.http.post(this.baseURL, this.formData);
  }
  putPaymethods() {
    return this.http.put(`${this.baseURL}/${this.formData.PaymethodId}`, this.formData);
  }
  deletePaymethods(id: number) {
    return this.http.delete(`${this.baseURL}/${id}`);
  }

  getPaymethodsbyId(id: number) {
    return this.http.get(`${this.baseURL}/${id}`);
  }

  refreshList() {
    return lastValueFrom(this.http.get(this.baseURL));
  }
}
