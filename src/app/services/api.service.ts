import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = environment.apiEndpoint;

  constructor(private http: HttpClient) {}

  signIn(email: string, password: string) {
    const url = `${this.apiUrl}/auth/signin`;
    const body = { email, password };
    return this.http.post(url, body);
  }
}
