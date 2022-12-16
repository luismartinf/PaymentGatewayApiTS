import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { TransfersDetail } from '../models/transfers-detail.model';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TransfersService {

  formData: TransfersDetail= new TransfersDetail();
  readonly baseURL = 'https://localhost:44379/api/Transfers';
  list!: TransfersDetail[];

  constructor(private http: HttpClient) { }

  postTransfers() {
    return this.http.post(this.baseURL, this.formData);
  }
  putTransfers() {
    return this.http.put(`${this.baseURL}/${this.formData.TransferId}`, this.formData);
  }
  deleteTransfers(id: number) {
    return this.http.delete(`${this.baseURL}/${id}`);
  }

  getTransfersbyId(id: number) {
    return this.http.get(`${this.baseURL}/${id}`);
  }

  refreshList() {
    return lastValueFrom(this.http.get(this.baseURL));
  }
}
