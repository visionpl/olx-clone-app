import { Component } from '@angular/core';

@Component({
  selector: 'app-random-offers-list',
  templateUrl: './random-offers-list.component.html',
  styleUrls: ['./random-offers-list.component.css'],
})
export class RandomOffersListComponent {
  randomOffers = [
    {
      id: 1,
      name: 'Lorem ipsum dolor sit amet',
      district: 'Wrzeszcz',
      price: 200,
      image:
        'https://images.pexels.com/photos/3232535/pexels-photo-3232535.jpeg?auto=compress&cs=tinysrgb&w=1600',
    },
    {
      id: 2,
      name: 'Donec hendrerit erat justo',
      district: 'Żabianka',
      price: 599,
      image:
        'https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&w=1600',
    },
    {
      id: 3,
      name: 'Lorem ipsum dolor sit amet',
      district: 'Wrzeszcz',
      price: 254,
      image:
        'https://images.pexels.com/photos/3232535/pexels-photo-3232535.jpeg?auto=compress&cs=tinysrgb&w=1600',
    },
    {
      id: 4,
      name: 'Donec hendrerit erat justo',
      district: 'Żabianka',
      price: 1599,
      image:
        'https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&w=1600',
    },
    {
      id: 5,
      name: 'Lorem ipsum dolor sit amet',
      district: 'Wrzeszcz',
      price: 200,
      image:
        'https://images.pexels.com/photos/3232535/pexels-photo-3232535.jpeg?auto=compress&cs=tinysrgb&w=1600',
    },
    {
      id: 6,
      name: 'Donec hendrerit erat justo',
      district: 'Żabianka',
      price: 599,
      image:
        'https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&w=1600',
    },
    {
      id: 7,
      name: 'Lorem ipsum dolor sit amet',
      district: 'Wrzeszcz',
      price: 254,
      image:
        'https://images.pexels.com/photos/3232535/pexels-photo-3232535.jpeg?auto=compress&cs=tinysrgb&w=1600',
    },
    {
      id: 8,
      name: 'Donec hendrerit erat justo',
      district: 'Żabianka',
      price: 1599,
      image:
        'https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&w=1600',
    },
  ];
}
