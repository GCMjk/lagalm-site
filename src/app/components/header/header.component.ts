import { Component } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  logo = {
    route: "../../assets/lagalm-logo.svg",
    name: 'Logo Lagalm Industrial'
  };

  toggle = false;
  lang = true;

  constructor(private translate: TranslateService) {
    translate.setDefaultLang('es');
  }

  collapse() {

    if(this.toggle == false){
      this.toggle = true;
    }else{
      this.toggle = false;
    }

  }

  useLanguage(language: string): void {
    this.translate.use(language);

    if (this.lang == false) {

      this.lang = true;

    }else {

      this.lang = false;

    }

  }
  
}
