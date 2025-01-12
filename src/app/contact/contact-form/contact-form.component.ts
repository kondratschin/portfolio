import { Component, Inject, signal } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { TranslationService } from '../../shared/translation.service';
import { HttpClient } from '@angular/common/http';
import { ScreenService } from '../../shared/screen.service';
import { ContactData } from '../../interfaces/contactData.interface';
import { ResponseData } from '../../interfaces/response.interface';


@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [FormsModule, RouterLink, TranslateModule],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss'
})
export class ContactFormComponent {

  constructor(
    public language: TranslationService,
    public screen: ScreenService
  ) {}
  
  private http = Inject(HttpClient);

  privacyPolicyChecked = false;
  formSubmitted = signal(false);
  emailFocused = signal(false);

  contactData: ContactData = {
    name: '',
    email: '',
    message: '',
  };

  post = {
    endPoint: 'https://www.kondratschin.com/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid) {
      this.formSubmitted.set(true);
      document.body.classList.add('no-scroll');
      this.http
        .post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response: ResponseData) => {
            ngForm.resetForm();
          },
          error: (error: any) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });
    }
    setTimeout(() => {
      this.formSubmitted.set(false);
      document.body.classList.remove('no-scroll');
    }, 3000);
  }

  closeDialog() {
    this.formSubmitted.set(false);
    document.body.classList.remove('no-scroll');
  }
}
