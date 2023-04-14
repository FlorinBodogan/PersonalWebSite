import { Component } from '@angular/core';
import { faGithub, faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  faGithub = faGithub;
  faFacebook = faFacebook;
  faLinkedin = faLinkedin
}
