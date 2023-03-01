import { Component } from '@angular/core';
import {
  faFacebook,
  faInstagram,
  faYoutube,
  faTwitter,
  faTiktok,
} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {
  faFacebook = faFacebook;
  faInstagram = faInstagram;
  faYoutube = faYoutube;
  faTwitter = faTwitter;
  faTiktok = faTiktok;
}
