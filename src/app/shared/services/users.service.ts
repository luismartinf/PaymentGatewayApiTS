import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { UsersDetail } from '../models/users-detail.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  formData: UsersDetail= new UsersDetail();
  readonly baseURL = 'https://localhost:44379/api/Users';
  list!: UsersDetail[];

  constructor(private http: HttpClient) { }

  postUsers() {
    return this.http.post(`${this.baseURL}/PostUser`, this.formData);
  }
  putUsers() {
    return this.http.put(`${this.baseURL}/Putuser/${this.formData.UserId}`, this.formData);
  }
  deleteUsers(id: number) {
    return this.http.delete(`${this.baseURL}/Delete/${id}`);
  }

  getUsersbyId(id: number) {
    return this.http.get(`${this.baseURL}/GetUsersbyId/${id}`);
  }

  refreshList() {
    return lastValueFrom(this.http.get(`${this.baseURL}/GetUsers`));
  }

}
