import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environment';

@Injectable({
  providedIn: 'root',
})
export class ApiServiceService {
  private apiUrl = environment.apiEndpoint;

  constructor(private http: HttpClient) {}

  signIn(email: string, password: string) {
    const url = `${this.apiUrl}/signin`;
    const body = { email, password };
    return this.http.post(url, body);
  }
}
