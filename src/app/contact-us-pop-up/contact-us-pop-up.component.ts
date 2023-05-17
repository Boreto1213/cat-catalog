import { Component, HostListener, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { EventEmitter } from '@angular/core';
import { ContactUsService } from '../shared/services/contact-us-pop-up.service';
import { Email } from '../shared/models/email.model';
import { EmailService } from '../shared/services/email-service.service';
import { NgToastService } from 'ng-angular-popup';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact-us-pop-up',
  templateUrl: './contact-us-pop-up.component.html',
  styleUrls: ['./contact-us-pop-up.component.scss']
})
export class ContactUsPopUpComponent implements OnInit {
  @Output() closeModal = new EventEmitter();
  isMobile = false;

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.isMobile = event.target.innerWidth < 900;
  }

  constructor(private contactUsService: ContactUsService, private emailService: EmailService,
              private toastService: NgToastService) { }

  ngOnInit(): void {
    this.isMobile = window.innerWidth < 900;
  }

  close(): void {
    this.contactUsService.openCloseService.next(false);
  }

  async onSubmit(form: NgForm) {
    this.emailService.sendEmail(form.value as Email);
    this.toastService.success({detail: 'Success',summary: 'Email sent!', position: 'tr', duration: 5000});
    form.reset();
  }
}
