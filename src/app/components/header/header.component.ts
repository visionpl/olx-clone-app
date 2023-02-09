import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [],
})
export class HeaderComponent {
  emailLogin: string = localStorage.getItem('emailInput');
  constructor() {}
}
