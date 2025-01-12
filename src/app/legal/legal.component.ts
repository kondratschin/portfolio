import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { TranslationService } from '../shared/translation.service';

@Component({
  selector: 'app-legal',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './legal.component.html',
  styleUrl: './legal.component.scss'
})
export class LegalComponent {
  constructor( public language: TranslationService ) {}
}
