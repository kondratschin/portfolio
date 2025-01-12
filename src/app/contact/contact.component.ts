import { Component } from '@angular/core';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { TranslateModule } from '@ngx-translate/core';
import { TranslationService } from '../shared/translation.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ContactFormComponent, TranslateModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  constructor(
    public language: TranslationService
  ) {}

}
