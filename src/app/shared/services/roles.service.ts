import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { RolesDetail } from '../models/roles-detail.model';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class RolesService {

  formData: RolesDetail= new RolesDetail();
  readonly baseURL = 'https://localhost:44379/api/Roles';
  list!: RolesDetail[];

  constructor(private http: HttpClient) { }

  postRoles() {
    return this.http.post(this.baseURL, this.formData);
  }
  putRoles() {
    return this.http.put(`${this.baseURL}/${this.formData.RolesId}`, this.formData);
  }
  deleteRoles(id: number) {
    return this.http.delete(`${this.baseURL}/${id}`);
  }

  getRolebyId(id: number) {
    return this.http.get(`${this.baseURL}/${id}`);
  }

  refreshList() {
    return lastValueFrom(this.http.get(this.baseURL));
  }
}
