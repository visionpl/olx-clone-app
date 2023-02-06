import { Injectable } from "@angular/core";

@Injectable()
export class LoginService {
  loginEmail(email: string) {
    console.log('email is:' + email);
  }
}
