import { Component, HostListener } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { TranslationService } from '../shared/translation.service';
import { ScreenService } from '../shared/screen.service';
import { CommonModule } from '@angular/common';
import { InfoComponent } from './info/info.component';
import { ScrollAnimationDirective } from '../directives/scroll-animation.directive';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, TranslateModule, InfoComponent, ScrollAnimationDirective],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

  constructor(
    public language: TranslationService,
    public screen: ScreenService
  ) {}


  overlayInfo = false;
  hoverIndex: number | null = null;
  currentIndex: number = 0;
  hover: string = '';
  projects = [
    {
      title: 'Join',
      codeLanguage: ['HTML', 'CSS', 'JavaScript', 'Firebase'],
      image: 'join_cover.svg',
      description: 'main_content.projects.project_dialog.description_join',
      links: [
        'https://github.com/kondratschin/join',
        'https://kondratschin.de/projects/join/',
      ],
    },
    {
      title: 'KOSP',
      codeLanguage: ['HTML', 'CSS', 'JavaScript'],
      image: 'kosp.gif',
      description:
        'main_content.projects.project_dialog.description_kosp',
      links: [
        'https://github.com/kondratschin/kosp',
        'https://kondratschin.de/projects/kosp/',
      ],
    },
    {
      title: 'DA Bubble',
      codeLanguage: ['Angular', 'Firebase', 'TypeScript'],
      image: 'dabubble.svg',
      description: 'main_content.projects.project_dialog.description_da_bubble',
      links: [],
    },
  ];

  hoverButton(index: number) {
    this.hoverIndex = index;
  }

  noHover() {
    this.hoverIndex = null;
  }

  @HostListener('wheel', ['$event'])
  onWheel(event: Event) {
    if (this.overlayInfo) event.preventDefault();
  }

  @HostListener('touchmove', ['$event'])
  onTouchMove(event: TouchEvent) {
    if (this.overlayInfo) {
      event.preventDefault();
    }
  }

  openDialog(index: number) {
    this.overlayInfo = true;
    this.currentIndex = index;
  }

  hoverIn(link: string): void {
    this.hover = link;
  }

  hoverOut(): void {
    this.hover = '';
  }
}
