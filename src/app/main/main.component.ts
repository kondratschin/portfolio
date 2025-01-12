import { Component } from '@angular/core';
import { AboutComponent } from '../about/about.component';
import { AotComponent } from '../aot/aot.component';
import { SkillsComponent } from '../skills/skills.component';
import { ProjectsComponent } from '../projects/projects.component';
import { FeedbackComponent } from '../feedback/feedback.component';
import { ContactComponent } from '../contact/contact.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [AboutComponent, AotComponent,SkillsComponent, ProjectsComponent, FeedbackComponent, ContactComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
