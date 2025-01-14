import { Component } from '@angular/core';
import { ScreenService } from '../shared/screen.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  hover: string = '';
  links=[
    {
      link:'https://github.com/kondratschin',
      name:'Github',
      target: '_blank'
    },
    {
      link:'https://www.linkedin.com/in/kondratschin/',
      name:'LinkedIn',
      target: '_blank'
    },
    {
      link:'mailto:info@kondratschin.com',
      name:'Email',
      target: '_blank'
    },
    {
      link:'/legal',
      name:'Legal Notice',
      target: '_self'
    },
  ]
  
  constructor(public screen: ScreenService) {}

  hoverIn(link: string): void {
    this.hover = link;
  }

  hoverOut(): void {
    this.hover = '';
  }
}
