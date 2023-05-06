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

  isError = false;

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
        () => {
          localStorage.setItem('emailInput', credentials.email);
          this.router.navigate(['/']);
        },
        (error) => {
          console.error('error', error);
          this.isError = true;
          this.signInForm.reset();
        }
      );
    }
    this.signInForm.markAllAsTouched();
  }

  hideError() {
    this.isError = false;
  }

  signUpForm = new FormGroup(
    {
      email: new FormControl('test3@test.com', [
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

  onSignUp(credentials: any) {
    if (this.signUpForm.valid) {
      this.api.signUp(credentials.email, credentials.password).subscribe(
        () => {
          // localStorage.setItem('emailInput', credentials.email);
          // this.router.navigate(['/']);
          console.log('ok');
        },
        (error) => {
          console.error('error', error);
          // this.isError = true;
          // this.signInForm.reset();
        }
      );
      console.log(credentials);
    }
    this.signUpForm.markAllAsTouched();
  }
}
