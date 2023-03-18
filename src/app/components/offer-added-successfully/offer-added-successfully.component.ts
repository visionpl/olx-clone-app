import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-offer-added-successfully',
  templateUrl: './offer-added-successfully.component.html',
  styleUrls: ['./offer-added-successfully.component.css'],
})
export class OfferAddedSuccessfullyComponent {
  constructor(private router: Router) {}

  public timeleft: number;

  ngOnInit() {
    this.timeleft = 5;
    let redirectTime = setInterval(() => {
      if (this.timeleft <= 1) {
        clearInterval(redirectTime);
      }
      this.timeleft -= 1;
      console.log(this.timeleft);
    }, 1000);

    setTimeout(() => {
      this.router.navigate(['/']);
    }, 5000);
  }
}
