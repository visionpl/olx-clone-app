import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-random-offers-list',
  templateUrl: './random-offers-list.component.html',
  styleUrls: ['./random-offers-list.component.css'],
})
export class RandomOffersListComponent implements OnInit {
  constructor(private api: ApiService) {}
  randomOffersList = [];

  ngOnInit() {
    this.api.getRandomOffers(8).subscribe((data: any[]) => {
      this.randomOffersList = data;
    });
  }
}
