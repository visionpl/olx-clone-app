import { Component, Input } from '@angular/core';
import { OfferItem } from 'src/app/interfaces/OfferItem';
// import { faCoffee, faHeart, faHeartcircle } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-single-offer',
  templateUrl: './single-offer.component.html',
  styleUrls: ['./single-offer.component.css'],
})
export class SingleOfferComponent {
  @Input() randomOfferItem: OfferItem;

  faHeart = faHeart;
}
