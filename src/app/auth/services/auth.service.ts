import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  baseUrl = 'https://dummyjson.com/auth/'
  constructor(private http: HttpClient) {}

  login(payload: {username: string, password: string}): Observable<any> {
    return this.http.post(`${this.baseUrl}login`, payload);
  }
}
