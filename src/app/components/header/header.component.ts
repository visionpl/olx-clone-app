import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [],
})
export class HeaderComponent {
  emailLogin: string = localStorage.getItem('userEmail');
  constructor(private api: ApiService, private router: Router) {}

  onSignOut() {
    this.api.signOut().subscribe(() => {
      localStorage.removeItem('userEmail');
      this.router.navigate(['/']);
    });
  }
}
