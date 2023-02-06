import { Component, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
  providers: [LoginService],
})
export class LoginPageComponent {
  @Output() email = new EventEmitter<string>();

  constructor(private router: Router, private loginService: LoginService) {}

  onLogin(value: string) {
    this.email.emit(value);
    // this.loginService.loginEmail(value);
    this.router.navigate(['/']);
  }
}
