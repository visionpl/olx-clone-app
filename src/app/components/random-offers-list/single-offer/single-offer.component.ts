import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-single-offer',
  templateUrl: './single-offer.component.html',
  styleUrls: ['./single-offer.component.css'],
})
export class OfferBoxComponent {
  @Input() randomOffer = [];
}
