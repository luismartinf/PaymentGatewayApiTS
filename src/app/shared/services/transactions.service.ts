import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { TransactionsDetail } from '../models/transactions-detail.model';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TransactionsService {

  formData: TransactionsDetail= new TransactionsDetail();
  readonly baseURL = 'https://localhost:44379/api/Transactions';
  list!: TransactionsDetail[];

  constructor(private http: HttpClient) { }

  postTransactions() {
    return this.http.post(this.baseURL, this.formData);
  }
  putTransactions() {
    return this.http.put(`${this.baseURL}/${this.formData.TransactionId}`, this.formData);
  }
  deleteTransactions(id: number) {
    return this.http.delete(`${this.baseURL}/${id}`);
  }

  getTransactionsbyId(id: number) {
    return this.http.get(`${this.baseURL}/${id}`);
  }

  refreshList() {
    return lastValueFrom(this.http.get(this.baseURL));
  }
}
