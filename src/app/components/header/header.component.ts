import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  logo = {
    route: environment.lagalmLogo,
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