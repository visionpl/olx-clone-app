import { Component, Input } from '@angular/core';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { OfferItem } from 'src/app/interfaces/OfferItem';

@Component({
  selector: 'app-search-offer-item',
  templateUrl: './search-offer-item.component.html',
  styleUrls: ['./search-offer-item.component.css'],
})
export class SearchOfferItemComponent {
  faHeart = faHeart;
  @Input() searchResult: OfferItem;
}
