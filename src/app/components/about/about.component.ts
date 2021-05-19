import { Component, OnInit } from '@angular/core';
import { faQuoteRight } from '@fortawesome/free-solid-svg-icons';


import SwiperCore, {Pagination, EffectCoverflow, Autoplay} from 'swiper/core';

SwiperCore.use([Pagination, EffectCoverflow, Autoplay]);

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  faQuoteRight = faQuoteRight;

  constructor() { }

  ngOnInit(): void {
  }

}
