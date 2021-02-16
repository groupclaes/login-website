import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
import { TranslateService } from '@ngx-translate/core';

import { default as nl } from '../assets/i18n/nl.json';
import { default as fr } from '../assets/i18n/fr.json';

@Component({
  selector: 'claes-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  verifyResponse: string

  constructor(
    private translate: TranslateService
  ) {
    translate.setTranslation('nl', nl)
    translate.setTranslation('fr', fr)

    translate.setDefaultLang(environment.defaultLanguage)
    translate.addLangs(environment.supportedLanguages)
    const browserLang: string = translate.getBrowserLang()

    if (typeof window !== 'undefined') {
      const myLang = window.localStorage.getItem('language')
      this.updateLangIfSupported(myLang ? myLang : browserLang)
    } else {
      translate.use(environment.defaultLanguage)
    }
  }

  private updateLangIfSupported(lang: string) {
    if (environment.supportedLanguages.indexOf(lang) >= 0) {
      this.translate.use(lang)
    } else {
      this.translate.use(environment.defaultLanguage)
    }
  }
}
