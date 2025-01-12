import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  EN = true;
  DE = false;

  constructor(private translateService: TranslateService) {
    this.translateService.setDefaultLang('en');
    this.translateService.use('en');
  }

  translate(lang: string) {
    this.translateService.use(lang);
    this.EN = lang === 'en';
    this.DE = lang === 'de';
  }

  get currentLang(): string {
    return this.translateService.currentLang;
  }
}