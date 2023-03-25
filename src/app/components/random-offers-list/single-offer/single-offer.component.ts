import { Component, Input } from '@angular/core';
import { OfferItem } from 'src/app/interfaces/OfferItem';

@Component({
  selector: 'app-single-offer',
  templateUrl: './single-offer.component.html',
  styleUrls: ['./single-offer.component.css'],
})
export class SingleOfferComponent {
  @Input() randomOfferItem: OfferItem;
}
