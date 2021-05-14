import { Component, OnInit, AfterViewInit } from '@angular/core';
import { faArrowRight, faCalendar } from '@fortawesome/free-solid-svg-icons';
declare var anime: any;  
  

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  faArrowRight = faArrowRight;
  faCalendar = faCalendar;

  contactMail = "contacto@lagalm.mx";
  infoMail = "info@lagalm.mx";
  salesMail = "ventas@lagalm.mx";
  phone = "55 1579 4661";

  cards = [
    {
      txt: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo soluta officia tenetur, nulla aperiam ipsam veniam reprehenderit reiciendis molestias quis?",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
      txt: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi, ipsa.",
      desc: "Lorem ipsum dolor sit amet consectetur elit."
    },
    {
      txt: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam voluptatem itaque adipisci incidunt accusantium ullam.",
      desc: "Lorem ipsum sit amet adipisicing sit amet elit."
    }
  ];

  customers = [
    {
      img: "../../assets/logos/customers/cazel.png",
      alt: "Logo Cazel"
    },
    {
      img: "../../assets/logos/customers/core.png",
      alt: "Logo Core"
    },
    {
      img: "../../assets/logos/customers/lozano.png",
      alt: "Logo Lozano"
    },
    {
      img: "../../assets/logos/customers/filmex.png",
      alt: "Logo Filmex"
    },
    {
      img: "../../assets/logos/customers/pmsteele.png",
      alt: "Logo PMSteele"
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {

    anime.timeline({loop: true})
    .add({
      targets: '.one',
      translateX: [40,0],
      translateZ: 0,
      opacity: [0,1],
      easing: "easeOutExpo",
      duration: 1500,
      delay: (el, i) => 500 + 30 * i
    }).add({
      targets: '.one',
      translateX: [0,-30],
      opacity: [1,0],
      easing: "easeInExpo",
      duration: 1500,
      delay: (el, i) => 100 + 30 * i
    }).add({
      targets: '.text-animation .two',
      translateX: [40,0],
      translateZ: 0,
      opacity: [0,1],
      easing: "easeOutExpo",
      duration: 1200,
      delay: (el, i) => 500 + 30 * i
    }).add({
      targets: '.text-animation .two',
      translateX: [0,-30],
      opacity: [1,0],
      easing: "easeInExpo",
      duration: 1100,
      delay: (el, i) => 100 + 30 * i
    }).add({
      targets: '.text-animation .three',
      translateX: [40,0],
      translateZ: 0,
      opacity: [0,1],
      easing: "easeOutExpo",
      duration: 1200,
      delay: (el, i) => 500 + 30 * i
    }).add({
      targets: '.text-animation .three',
      translateX: [0,-30],
      opacity: [1,0],
      easing: "easeInExpo",
      duration: 1100,
      delay: (el, i) => 100 + 30 * i
    });
  }

}
