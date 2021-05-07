import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  company = 'Lagalm';
  toggle = false;

  collapse() {
    console.log(this.toggle);

    if(this.toggle == false){
      this.toggle = true;
    }else{
      this.toggle = false;
    }
  }

  /* clickEvent() {
    [ngClass]="{'bg-gray-200': toggle}"
    this.toggle = !this.toggle;
  } */

}
