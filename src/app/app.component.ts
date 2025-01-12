import { Component, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { ScreenService } from './shared/screen.service';
import { FooterComponent } from './footer/footer.component';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  isScrolled = false;

  constructor(public screenService: ScreenService) {}
  title = 'portfolio';

  @HostListener('window:resize')
  onResize(): void {
    this.screenService.updateScreenWidth();
  }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    this.isScrolled = window.scrollY > 300; // Adjust the scroll position as needed
  }

}
