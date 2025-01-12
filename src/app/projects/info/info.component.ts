import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { TranslationService } from '../../shared/translation.service';
import { ScreenService } from '../../shared/screen.service';

@Component({
  selector: 'app-info',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './info.component.html',
  styleUrl: './info.component.scss'
})
export class InfoComponent {



  @Output() addDialogClosed: EventEmitter<boolean> = new EventEmitter();
  @Input() projects!: any[];
  @Input() currentIndex!: number;

  constructor(
    public language: TranslationService,
    public screen: ScreenService
  ) {}

  
  nextProject(){
    this.currentIndex= (this.currentIndex + 1)  % this.projects.length ;
  }

  formatTitle(title: string): string {
    return title.replace(/\s+/g, '').toLowerCase();
  }

 }
