import { Component, OnInit } from '@angular/core';
import { faMapPin } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  faMapPin = faMapPin;

  address = "#23, Sta Maria Cuautepec, 54949 Fuentes del Valle, Méx.";

  constructor() { }

  ngOnInit(): void {
  }

}
