import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AddOffersToLocalstorageForTestService {
  constructor() {}

  addSampleOffersToLocalStorage() {
    const offers = [
      {
        id: 1,
        offerName: 'Oferta testowa 1',
        image: [
          'https://images.pexels.com/photos/3685523/pexels-photo-3685523.jpeg?auto=compress&cs=tinysrgb&w=1600',
          'https://images.pexels.com/photos/3685538/pexels-photo-3685538.jpeg?auto=compress&cs=tinysrgb&w=1600',
          'https://images.pexels.com/photos/3685530/pexels-photo-3685530.jpeg?auto=compress&cs=tinysrgb&w=1600',
        ],
        category: 1,
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus cursus in metus ultrices dignissim. Nullam nec magna ut justo sagittis commodo. Cras quis urna ac magna consectet',
        price: 256,
        state: 2,
        district: 18,
        phoneNumber: '111222333',
      },
      {
        id: 2,
        offerName: 'Oferta testowa 2',
        image: [
          'https://images.pexels.com/photos/2386687/pexels-photo-2386687.jpeg?auto=compress&cs=tinysrgb&w=1600',
          'https://images.pexels.com/photos/1730560/pexels-photo-1730560.jpeg?auto=compress&cs=tinysrgb&w=1600',
        ],
        category: 8,
        description:
          'Vivamus auctor ipsum ante, vel lacinia nulla viverra sit amet. In vitae arcu sit amet massa venenatis consequat. Phasellus eget metus eu sem venenatis tempus. Ut nec aliquam nisi, ac facilisis quam. Nam commodo diam purus, ac luctus urna vestibulum at. Aliquam imperdiet pharetra vulputate. Quisque turpis magna, volutpat eget fringilla at, tempus vel neque. Cras sit amet enim libero. Donec nec eleifend turpis. Nulla placerat mattis arcu vitae malesuada. Cras ullamcorper leo nulla, mattis egestas nunc mollis non.',
        price: 99.99,
        state: 3,
        district: 6,
        phoneNumber: '111222333',
      },
      {
        id: 3,
        offerName: 'Oferta testowa 3',
        image: [
          'https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&w=1600',
          'https://images.pexels.com/photos/1549306/pexels-photo-1549306.jpeg?auto=compress&cs=tinysrgb&w=1600',
          'https://images.pexels.com/photos/1154089/pexels-photo-1154089.jpeg?auto=compress&cs=tinysrgb&w=1600',
        ],
        category: 1,
        description:
          'Sed tincidunt suscipit facilisis. Cras dapibus ut velit et pellentesque. Fusce ut mauris at tortor lacinia tristique. Nulla consectetur, orci ac commodo placerat, erat lorem sollicitudin augue, non elementum leo nisi vitae neque. Ut vel mi nulla. Maecenas turpis sapien, gravida in accumsan ut, maximus quis erat. Donec mattis pellentesque nibh, eget pharetra nisl consectetur a. Morbi ac dolor tempor, aliquam lorem non, molestie nibh. Suspendisse sed libero metus. Nullam tempus consectetur tellus, vitae varius tortor congue a. Sed aliquet elit odio, eu ultrices elit ullamcorper quis.',
        price: 1234,
        state: 1,
        district: 33,
        phoneNumber: '888999777',
      },
      {
        id: 4,
        offerName: 'Oferta testowa 4',
        image: [
          'https://images.pexels.com/photos/931154/pexels-photo-931154.jpeg?auto=compress&cs=tinysrgb&w=1600',
          'https://images.pexels.com/photos/4207475/pexels-photo-4207475.jpeg?auto=compress&cs=tinysrgb&w=1600',
        ],
        category: 2,
        description:
          'Pellentesque ut cursus magna, eget congue massa. Phasellus efficitur mi vitae ante ultrices, ut scelerisque ipsum dignissim. Donec congue mauris vitae nunc commodo, eu convallis neque vehicula. Nullam non elit vitae arcu bibendum semper id sed elit. Proin eu consequat urna. Nunc interdum, velit eget lacinia interdum, nisi orci posuere nibh, et elementum leo quam ut lacus. Nulla facilisi. Curabitur suscipit, arcu eu porttitor mattis, nisi erat sodales quam, non dignissim lacus quam ac lacus. Morbi ac elit nunc. Nam risus velit, mattis at nibh in, semper dignissim eros.',
        price: 34.99,
        state: 2,
        district: 11,
        phoneNumber: '888777444',
      },
      {
        id: 5,
        offerName: 'Oferta testowa 5',
        image: [
          'https://images.pexels.com/photos/1787234/pexels-photo-1787234.jpeg?auto=compress&cs=tinysrgb&w=1600',
          'https://images.pexels.com/photos/1738637/pexels-photo-1738637.jpeg?auto=compress&cs=tinysrgb&w=1600',
        ],
        category: 9,
        description:
          'Mauris rhoncus, libero nec pretium rutrum, neque mauris auctor ante, non pulvinar lectus mi eget odio. In volutpat orci sit amet enim placerat tincidunt viverra a augue. Quisque ac bibendum lectus. Aliquam odio tortor, volutpat quis lorem quis, rhoncus finibus ante. Nulla dictum libero sit amet nisi ultricies ultrices. Proin aliquam metus ut metus tempus mattis. Pellentesque a nisi sit amet odio varius pretium vitae quis urna. Morbi tristique sagittis dui, et porttitor urna tincidunt ut. Proin hendrerit urna nibh, sed dapibus urna placerat nec. Nullam a purus a ex varius porttitor at non nulla.',
        price: 87.23,
        state: 3,
        district: 17,
        phoneNumber: '111222888',
      },
      {
        id: 6,
        offerName: 'Oferta testowa 6',
        image: [
          'https://images.pexels.com/photos/4558413/pexels-photo-4558413.jpeg?auto=compress&cs=tinysrgb&w=1600',
          'https://images.pexels.com/photos/4046802/pexels-photo-4046802.jpeg?auto=compress&cs=tinysrgb&w=1600',
        ],
        category: 8,
        description:
          'Suspendisse ultricies quam sed nisl hendrerit, in bibendum lectus pellentesque. Integer eget metus sit amet lacus vulputate eleifend. Sed ante ipsum, semper eget ipsum non, hendrerit dapibus nulla. Nullam eros tortor, condimentum ut ipsum id, dignissim commodo dolor. Aliquam eget enim pellentesque, imperdiet ',
        price: 98,
        state: 2,
        district: 2,
        phoneNumber: '000222333',
      },
      {
        id: 7,
        offerName: 'Oferta testowa 7',
        image: [
          'https://images.pexels.com/photos/6446250/pexels-photo-6446250.jpeg?auto=compress&cs=tinysrgb&w=1600',
          'https://images.pexels.com/photos/5699374/pexels-photo-5699374.jpeg?auto=compress&cs=tinysrgb&w=1600',
        ],
        category: 12,
        description:
          'Dacilisis ullamcorper enim. Nulla tortor leo, vehicula eget nibh venenatis, vestibulum sollicitudin tellus. Etiam lacinia sit amet magna quis sodales. Nam tempus, ligula vitae interdum volutpat, eros odio pretium urna, quis dapibus libero lectus vitae ipsum. Aliquam erat volutpat. Duis varius arcu sed volutpat maximus. Nulla et augue malesuada, maximus leo in, semper eros. Vivamus id purus euismod, condimentum',
        price: 123,
        state: 1,
        district: 8,
        phoneNumber: '111222333',
      },
      {
        id: 8,
        offerName: 'Oferta testowa 8',
        image: [
          'https://images.pexels.com/photos/3232535/pexels-photo-3232535.jpeg?auto=compress&cs=tinysrgb&w=1600',
          'https://images.pexels.com/photos/3232536/pexels-photo-3232536.jpeg?auto=compress&cs=tinysrgb&w=1600',
          'https://images.pexels.com/photos/3232539/pexels-photo-3232539.jpeg?auto=compress&cs=tinysrgb&w=1600',
        ],
        category: 4,
        description:
          'Curabitur libero enim, rutrum ac lorem vitae, viverra auctor nunc. Donec vel lectus turpis. Mauris et mollis nulla. Proin placerat diam hendrerit, aliquam metus quis, vestibulum tortor. Donec eu semper odio. Etiam vehicula eget erat in fermentum. Integer quis dolor ornare, vehicula eros quis, scelerisque velit. Phasellus',
        price: 15,
        state: 3,
        district: 6,
        phoneNumber: '666999888',
      },
      {
        id: 9,
        offerName: 'Oferta testowa 9',
        image: [
          'https://images.pexels.com/photos/3999538/pexels-photo-3999538.jpeg',
        ],
        category: 8,
        description:
          'Ut gravida, lorem in aliquam consectetur, arcu arcu porttitor felis, et accumsan nulla leo a nibh. ',
        price: 999,
        state: 2,
        district: 27,
        phoneNumber: '555444888',
      },
      {
        id: 10,
        offerName: 'Oferta testowa 10',
        image: [
          'https://images.pexels.com/photos/1957478/pexels-photo-1957478.jpeg?auto=compress&cs=tinysrgb&w=1600',
          'https://images.pexels.com/photos/1957477/pexels-photo-1957477.jpeg?auto=compress&cs=tinysrgb&w=1600',
        ],
        category: 10,
        description:
          'Proin aliquam porta efficitur. Mauris ac ligula non sem eleifend tincidunt quis at libero. Suspendisse mi erat, elementum eu mauris ut, feugiat commodo dui. Etiam dapibus luctus leo sit amet tincidunt. Sed aliquam viverra justo sed tempus. Suspendisse potenti. Ut est lacus, pharetra at bibendum a, blandit a odio. Quisque id nisl aliquam, euismod dolor in, sodales mauris.',
        price: 18.09,
        state: 2,
        district: 35,
        phoneNumber: '666333999',
      },
      {
        id: 11,
        offerName: 'Oferta testowa 11',
        image: [
          'https://images.pexels.com/photos/4226864/pexels-photo-4226864.jpeg?auto=compress&cs=tinysrgb&w=1600',
          'https://images.pexels.com/photos/952366/pexels-photo-952366.jpeg?auto=compress&cs=tinysrgb&w=1600',
          ,
        ],
        category: 5,
        description:
          ' Aliquam erat volutpat. Duis varius arcu sed volutpat maximus. Nulla et augue malesuada, maximus leo in, semper eros. Vivamus id purus euismod, condimentum nunc vitae, scelerisque ligula. Praesent ac neque quis nisi hendrerit tempus. Cras sollicitudin vitae elit sit amet tincidunt. Phasellus pulvinar elementum susc',
        price: 125,
        state: 3,
        district: 7,
        phoneNumber: '111222333',
      },
    ];

    if (!localStorage.getItem('offers')) {
      localStorage.setItem('offers', JSON.stringify(offers));
    }
  }
}
