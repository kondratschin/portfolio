import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ScrollAnimationDirective } from '../directives/scroll-animation.directive';
import { TranslateModule } from '@ngx-translate/core';
import { TranslationService } from '../shared/translation.service';
import { ScreenService } from '../shared/screen.service';

@Component({
  selector: 'app-feedback',
  standalone: true,
  imports: [CommonModule, FormsModule, ScrollAnimationDirective, TranslateModule],
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss', './feedback.carousel.component.scss',
      ],
})
export class FeedbackComponent {

  constructor(
    public language: TranslationService,
    public screen: ScreenService
  ) {}

  feedbacks = [
    {
      text: 'Sehr gute Arbeit, sehr zufrieden. Vielen Dank für die tolle Zusammenarbeit!',
      name: 'Max Mustermann - Team Partner Join',
    },
    {
      text: 'Bissig, schnell und effizient. Wir sind sehr zufrieden mit dem Ergebnis.',
      name: 'Graf D. Racula - CEO, Blood Donations Molvania',
    },
    {
      text: 'Seite sieht super aus, vielen Dank für die tolle Arbeit!',
      name: 'Lord Brightspace  - Customer',
    },
  ];
  currentComment = 0;
  mainComment = this.feedbacks[this.currentComment];
  previousComment = this.feedbacks[this.getPreviousIndex(this.currentComment)];
  nextComment = this.feedbacks[this.getNextIndex(this.currentComment)];
  showPrev = false;
  showNext = false;
  currentScreenWidth = window.innerWidth;

  getPreviousIndex(index: number): number {
    return (index - 1 + this.feedbacks.length) % this.feedbacks.length;
  }

  getNextIndex(index: number): number {
    return (index + 1) % this.feedbacks.length;
  }

  updateComments() {
    this.mainComment = this.feedbacks[this.currentComment];
    this.previousComment =
      this.feedbacks[this.getPreviousIndex(this.currentComment)];
    this.nextComment = this.feedbacks[this.getNextIndex(this.currentComment)];
  }

  showPreviousComment() {
    if (this.showPrev || this.showNext) return;
    this.currentComment = this.getPreviousIndex(this.currentComment);
    if (this.screen.breakPoint(540)) return this.updateComments();
    this.showPrev = true;
    setTimeout(() => {
      this.updateComments();
      this.showPrev = false;
    }, 1300);
  }

  showNextComment() {
    if (this.showNext || this.showPrev) return;
    this.currentComment = this.getNextIndex(this.currentComment);
    if (this.screen.breakPoint(540)) return this.updateComments();
    this.showNext = true;
    setTimeout(() => {
      this.updateComments();
      this.showNext = false;
    }, 1300);
  }

}
