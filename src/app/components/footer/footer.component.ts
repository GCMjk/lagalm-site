import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';

import { faFacebookF, faLinkedinIn, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  faFacebookF = faFacebookF;
  faLinkedinIn = faLinkedinIn;
  faWhatsapp = faWhatsapp;

  facebook = {
    link: "https://www.facebook.com/Lagalm",
    icon: faFacebookF
  }

  linkedin = {
    link: "",
    icon: faLinkedinIn
  }

  whatsapp = {
    link: "",
    icon: faWhatsapp
  }

  logo = {
    route: environment.lagalmLogo,
    name: 'Logo Lagalm Industrial'
  };

  bureau = {
    route: '../../../assets/logos/iso/bureau-veritas.png',
    name: 'Logo Bureau Veritas'
  };

  iso = {
    route: '../../../assets/logos/iso/iso.png',
    name: 'Certificado ISO:9001'
  };

  constructor() { }

  ngOnInit(): void {
  }

}
