import { Component, HostListener } from '@angular/core';
import { EmailService } from '../shared/services/email-service.service';
import { NgToastService } from 'ng-angular-popup';
import { NgForm } from '@angular/forms';
import { Email } from '../shared/models/email.model';


@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent {
  isMobile = false;

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.isMobile = event.target.innerWidth < 900;
  }

  constructor(private emailService: EmailService, private toastService: NgToastService) { }

  ngOnInit(): void {
    this.isMobile = window.innerWidth < 900;
  }

  async onSubmit(form: NgForm) {
    const email: Email = form.value;
    if (email.content !== '' && email.email !== '' && email.subject !== '') {
      this.emailService.sendEmail(email);
      this.toastService.success({detail: 'Success',summary: 'Email sent!', position: 'tr', duration: 5000});
      form.reset();
    } else {
      this.toastService.error({detail: 'Error',summary: 'All fields are mandatory!', position: 'tr', duration: 5000});
    }
    
    
  }
}
