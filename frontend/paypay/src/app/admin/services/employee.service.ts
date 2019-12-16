import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(
    private http: HttpClient
  ) { }

  getAll() {
    return this.http.get(`employees`);

  }

  store(body) {
    return this.http.post(`employees`, body);
  }

  update(id, body) {
    return this.http.put(`employee/${id}`, body);
  }


  delete(id) {
    return this.http.delete(`employee/${id}`);
  }
}
