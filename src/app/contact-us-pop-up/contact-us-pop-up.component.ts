import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-contact-us-pop-up',
  templateUrl: './contact-us-pop-up.component.html',
  styleUrls: ['./contact-us-pop-up.component.scss']
})
export class ContactUsPopUpComponent implements OnInit {
  @Output() closeModal = new EventEmitter();

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  close(): void {
    this.closeModal.emit(true);
  }
}
