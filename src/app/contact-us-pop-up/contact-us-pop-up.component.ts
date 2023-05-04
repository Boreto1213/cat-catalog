import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { EventEmitter } from '@angular/core';
import { ContactUsService } from '../shared/services/contact-us-pop-up.service';
import { Email } from '../shared/models/email.model';
import { EmailService } from '../shared/services/email-service.service';

@Component({
  selector: 'app-contact-us-pop-up',
  templateUrl: './contact-us-pop-up.component.html',
  styleUrls: ['./contact-us-pop-up.component.scss']
})
export class ContactUsPopUpComponent implements OnInit {
  @Output() closeModal = new EventEmitter();

  constructor(private contactUsService: ContactUsService, private emailService: EmailService) { }

  ngOnInit(): void {
  }

  close(): void {
    this.contactUsService.openCloseService.next(false);
  }

  async onSubmit(data: Email) {
    console.log(data.email);
    await this.emailService.sendEmail(data);
  }
}
