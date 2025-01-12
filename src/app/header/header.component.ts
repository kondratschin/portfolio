import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { TranslationService } from '../shared/translation.service';
import { ScreenService } from '../shared/screen.service';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  // readonly LANG_KEY: string | undefined;
  hover: string = '';

  menu = {
    isOpen: false,
    toggle: function () {
      this.isOpen = !this.isOpen;
    },
  };

  versionEN: boolean = true;
  versionDE: boolean = false;
  navLinks = [{ id: 'about' }, { id: 'skills' }, { id: 'projects' }];

  constructor(
    public language: TranslationService,
    public screen: ScreenService
  ) {}

  hoverIn(link: string): void {
    this.hover = link;
  }

  hoverOut(): void {
    this.hover = '';
  }

  @HostListener('wheel', ['$event'])
  onWheel(event: Event) {
    if (this.menu.isOpen) event.preventDefault();
  }

  @HostListener('touchmove', ['$event'])
  onTouchMove(event: TouchEvent) {
    if (this.menu.isOpen) {
      event.preventDefault();
    }
  }
}
