import { Injectable, HostListener } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScreenService {
  screenWidth: number = window.innerWidth;
  mobileWidth: number = 768;
  tabletWidth: number = 1200;
  desktopWidth: number = 768;

  constructor() {
    this.updateScreenWidth();
  }

  @HostListener('window:resize')
  updateScreenWidth(): void {
    this.screenWidth = window.innerWidth;
  }

  displayIs(screen: string): boolean {
    switch (screen) {
      case 'mobile':
        return this.screenWidth < this.mobileWidth;
        case 'tablet':
          return this.screenWidth < this.tabletWidth;
      case 'desktop':
        return this.screenWidth > this.desktopWidth;
      default:
        return false;
    }
  }

  breakPoint(resolution: number): boolean {
    if (this.screenWidth < resolution) {
      return true;
    }
    return false;
  }

}