import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  constructor(
    private http: HttpClient
  ) { }

  getAll(query = {}) {
    return this.http.get(`reviews`, {params: query});

  }

  store(body) {
    return this.http.post(`reviews`, body);
  }

  update(id, body) {
    return this.http.put(`review/${id}`, body);
  }


  delete(id) {
    return this.http.delete(`review/${id}`);
  }}
