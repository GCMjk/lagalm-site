import { Component, OnInit } from '@angular/core';

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

  logo = {
    route: "../../assets/lagalm-logo.svg",
    name: "Logo Lagalm Industrial"
  };

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
