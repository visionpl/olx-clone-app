import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.css'],
})
export class OfferComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}
  id: number;

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
  }
}
