import { Component, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
  providers: [],
})
export class LoginPageComponent {
  constructor(private router: Router) {}

  onLogin(value: string) {
    // dodac w local storage
    localStorage.setItem('emailInput', value);
    this.router.navigate(['/']);
  }
}
