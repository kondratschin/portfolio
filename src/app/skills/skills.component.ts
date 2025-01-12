import { Component } from '@angular/core';
import { TranslationService } from '../shared/translation.service';
import { TranslateModule } from '@ngx-translate/core';
import { AnimationService } from '../shared/animation.service';
import { CommonModule } from '@angular/common';
import { ScrollAnimationDirective } from '../directives/scroll-animation.directive';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [TranslateModule, CommonModule, ScrollAnimationDirective],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent {
  constructor(
    public language: TranslationService,
    private animationService: AnimationService
  ) {}

  hover: string = '';
  linkContent: string = 'main_content.skill.link';
  // enablePopup: boolean = false;
  skills: Array<{ img: string; name: string }> = [
    { img: 'html.svg', name: 'HTML' },
    { img: 'css.svg', name: 'CSS' },
    { img: 'javascript.svg', name: 'JavaScript' },
    { img: 'materialdesign.svg', name: 'Material Design' },
    { img: 'typescript.svg', name: 'TypeScript' },
    { img: 'angular.svg', name: 'Angular' },
    { img: 'firebase.svg', name: 'Firebase' },
    { img: 'git.svg', name: 'Git' },
    { img: 'api.svg', name: 'Rest-Api' },
    { img: 'scrum.svg', name: 'Scrum' },
    { img: 'powerapps.png', name: 'Power Apps' },
    { img: 'growth.svg', name: 'Growth mindset' },
  ];
  interests: Array<{ img: string; title: string }> = [
    {
      img: 'react',
      title: 'React',
    },
    {
      img: 'python',
      title: 'Python',
    },
  ];

  skills2: Array<{
    img: string;
    name: string;
    interests?: Array<{ name: string; img: string }>;
  }> = [
    {
      name: 'HTML',
      img: 'html.svg'
    },
    {
      name: 'CSS',
      img: 'css.svg',
      interests: [
        { name: 'SCSS', img: 'scss.svg' }
      ],
    },
    {
      name: 'JavaScript',
      img: 'javascript.svg'
    },
    {
      name: 'Material Design',
      img: 'materialdesign.svg'
    },
    {
      name: 'TypeScript',
      img: 'typescript.svg'
    },
    {
      name: 'Angular',
      img: 'angular.svg'
    },
    {
      name: 'Firebase',
      img: 'firebase.svg'
    },
    {
      name: 'Git',
      img: 'git.svg'
    },
    {
      name: 'Rest-Api',
      img: 'api.svg'
    },
    {
      name: 'Scrum',
      img: 'scrum.svg'
    },
    {
      name: 'Power Platform',
      img: 'powerplatform.png',
      interests: [
        { name: 'Power Apps', img: 'powerapps_color.png' },
        { name: 'Power Automate', img: 'powerautomate.svg' },
        { name: 'Power BI', img: 'powerbi.svg' },
      ],
    },
    {
      name: 'Interests',
      img: 'growth.svg',
      interests: [
        { name: 'Python', img: 'python.svg' },
        { name: 'React', img: 'react.svg' },
      ],
    },
  ];

  startAnimation(content: string, maxXLeft: number, xRight: number) {
    this.animationService.startAnimation(content, maxXLeft, xRight);
  }

  stopAnimation(content: string) {
    this.animationService.stopAnimation(content);
  }

  getMarqueePosition(content: string): number {
    return this.animationService.marqueeLinkX[content] || 0;
  }

  hoverIn(link: string): void {
    this.hover = link;
  }

  hoverOut(): void {
    this.hover = '';
  }
}
