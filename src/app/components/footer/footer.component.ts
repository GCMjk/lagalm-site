import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  link = {
    about: {
      title: 'Sobre nosotros',
      li: {
        why: '¿Por que Lagalm?',
        solutions: 'Soluciones',
        history: 'Historia',
        politics: 'Politicas'
      }
    },
    services: {
      title: 'Servicios',
      li: {
        know: 'Conocelos'
      }
    },
    contact: {
      title: 'Contacto',
      li: {
        weContact: 'Te contactamos',
        email: 'contacto@lagalm.mx',
        phone: '55 1579 4661'
      }
    },
    follow: {
      title: 'Siguenos'
    },
    adress: {
      title: 'Dirección'
    }
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

  certificate = 'Estamos certificados por la norma ISO 9001:2015 para lograr procesos adecuados que cumplan con los más altos estándares de nuestros clientes, desde la asesoría, el diseño, la producción, distribución, herramentales y hasta materiales.'

  constructor() { }

  ngOnInit(): void {
  }

}
