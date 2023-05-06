import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
  providers: [],
})
export class LoginPageComponent {
  constructor(private router: Router, private api: ApiService) {}

  signInForm = new FormGroup(
    {
      email: new FormControl('test@test.com', [
        Validators.required,
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
      ]),
      password: new FormControl('123', [
        Validators.required,
        Validators.minLength(3),
      ]),
    },
    { updateOn: 'blur' }
  );

  onLogin(credentials: any) {
    if (this.signInForm.valid) {
      this.api.signIn(credentials.email, credentials.password).subscribe(
        (response) => {
          console.log('response', response);
          // api
        },
        (error) => {
          console.error('error', error);
          this.signInForm.reset();
          // api error
        }
      );
    }
    this.signInForm.markAllAsTouched();
  }
}
