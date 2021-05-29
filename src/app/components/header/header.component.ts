import { Component, HostListener } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  logo = {
    route: "../../assets/isologo.png",
    name: 'Logo Lagalm Industrial'
  };

  toggle = false;
  lang = true;

  header_variable = false;

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

  @HostListener("document:scroll")

  scrollFunction(){

    if(document.body.scrollTop > 0 || document.documentElement.scrollTop > 0){
      this.header_variable = true;
    } else {
      this.header_variable = false;
    }

  }
  
}
