import { Component, Input, OnInit } from '@angular/core';
import { OfferItem } from 'src/app/interfaces/OfferItem';

@Component({
  selector: 'app-offer-view',
  templateUrl: './offer-view.component.html',
  styleUrls: ['./offer-view.component.css'],
})
export class OfferViewComponent implements OnInit {
  offer: OfferItem;

  @Input() idOffer: number;

  ngOnInit() {
    const offersString = localStorage.getItem('offers');
    const offers = JSON.parse(offersString);
    this.offer = offers.find((offer: OfferItem) => offer.id == this.idOffer);
  }
}
