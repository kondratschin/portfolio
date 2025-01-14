import { Component } from '@angular/core';
import { TranslationService } from '../shared/translation.service';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NgxFastMarqueeModule } from 'ngx-fast-marquee';
import { AnimationService } from '../shared/animation.service';
import { ScreenService } from '../shared/screen.service';

@Component({
  selector: 'app-aot',
  standalone: true,
  imports: [CommonModule, TranslateModule, NgxFastMarqueeModule],
  templateUrl: './aot.component.html',
  styleUrl: './aot.component.scss',
})
export class AotComponent {
  constructor(
    private animationService: AnimationService,
    public language: TranslationService,
    public screen: ScreenService
  ) {}

  hover: string = '';

  sideLinks = [
    {
      id: 'mail',
      link: 'mailto:info@kondratschin.com',
      target: '_self',
    },
    {
      id: 'github',
      link: 'https://github.com/kondratschin',
      target: '_blank',
    },
    {
      id: 'linkedin',
      link: 'https://www.linkedin.com/in/kondratschin/',
      target: '_blank',
    },
  ];

  buttonLinks = [
    {
      link: 'projects',
      content: 'check_my_work',
    },
    {
      link: 'contact',
      content: 'contact_link',
    },
  ];

  texts = ['ticker_text_1', 'ticker_text_2', 'ticker_text_3', 'ticker_text_4'];

  startAnimation(content: string, maxXLeft: number, xRight: number) {
    this.animationService.startAnimation(content, maxXLeft, xRight);
  }

  stopAnimation(content: string) {
    this.animationService.stopAnimation(content);
  }

  getMarqueePosition(content: string): number {
    return this.animationService.marqueeLinkX[content] || 0;
  }
}
