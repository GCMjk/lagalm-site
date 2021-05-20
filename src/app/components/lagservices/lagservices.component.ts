import { Component, OnInit } from '@angular/core';
import { faArrowRight, faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-lagservices',
  templateUrl: './lagservices.component.html',
  styleUrls: ['./lagservices.component.scss']
})
export class LagservicesComponent implements OnInit {

  faArrowRight = faArrowRight;
  faArrowAltCircleRight = faArrowAltCircleRight;

  constructor() { }

  ngOnInit(): void {
  }

}
