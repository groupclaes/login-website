import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'claes-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  loginForm: FormGroup;
  verifyResponse: string;

  constructor(
    private translate: TranslateService
  ) {
    translate.setDefaultLang(environment.defaultLanguage);
    translate.addLangs(environment.supportedLanguages);
    const browserLang: string = translate.getBrowserLang();

    if (typeof window !== 'undefined') {
      const myLang = window.localStorage.getItem('language');

      if (myLang) {
        switch (myLang) {
          case 'fr':
            translate.use('fr');
            break;

          default:
            // the lang to use, if the lang isn't available, it will use the current loader to get them
            translate.use('nl');
            break;
        }
      } else {
        switch (browserLang) {
          case 'fr':
            translate.use('fr');
            break;

          default:
            // the lang to use, if the lang isn't available, it will use the current loader to get them
            translate.use('nl');
            break;
        }
      }
    } else {
      translate.use(environment.defaultLanguage);
    }
  }
}
