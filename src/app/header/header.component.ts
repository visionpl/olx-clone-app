import { Component, Input } from '@angular/core';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [LoginService],
})
export class HeaderComponent {
  emailLogin: string = '';

  constructor(private loginService: LoginService) {}

  addItem(newItem: string) {
    this.emailLogin = newItem;
    this.loginService.loginEmail(newItem);
  }
}
