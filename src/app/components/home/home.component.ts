import { Component, OnInit, AfterViewInit } from '@angular/core';
import { faArrowRight, faCalendar, faMapPin, faAtlas } from '@fortawesome/free-solid-svg-icons';
declare var anime: any;  

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  faArrowRight = faArrowRight;
  faCalendar = faCalendar;
  faMapPin = faMapPin;
  faAtlas = faAtlas;

  contactMail = "contacto@lagalm.mx";
  infoMail = "info@lagalm.mx";
  salesMail = "ventas@lagalm.mx";
  phone = "55 1579 4661";

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

  items = [
    {
      icon: faMapPin,
      title: "Lorem",
      text: "We promise to offer you the best rate we can - at par with the industry standard."
    },
    {
      icon: faAtlas,
      title: "Ipsum",
      text: "We promise to offer you the best rate we can - at par with the industry standard."
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {

    anime.timeline({loop: true})
    .add({
      targets: '.design',
      translateX: [40,0],
      translateZ: 0,
      opacity: [0,1],
      easing: "easeOutExpo",
      duration: 1200,
      delay: (el, i) => 500 + 30 * i
    }).add({
      targets: '.design',
      translateX: [0,-30],
      opacity: [1,0],
      easing: "easeInExpo",
      duration: 1100,
      delay: (el, i) => 100 + 30 * i
    }).add({
      targets: '.manufacture',
      translateX: [40,0],
      translateZ: 0,
      opacity: [0,1],
      easing: "easeOutExpo",
      duration: 1200,
      delay: (el, i) => 500 + 30 * i
    }).add({
      targets: '.manufacture',
      translateX: [0,-30],
      opacity: [1,0],
      easing: "easeInExpo",
      duration: 1100,
      delay: (el, i) => 100 + 30 * i
    }).add({
      targets: '.logistics',
      translateX: [40,0],
      translateZ: 0,
      opacity: [0,1],
      easing: "easeOutExpo",
      duration: 1200,
      delay: (el, i) => 500 + 30 * i
    }).add({
      targets: '.logistics',
      translateX: [0,-30],
      opacity: [1,0],
      easing: "easeInExpo",
      duration: 1100,
      delay: (el, i) => 100 + 30 * i
    });
  }

}
