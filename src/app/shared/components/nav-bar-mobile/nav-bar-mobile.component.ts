import { Component, OnInit } from '@angular/core';
import { ContactUsService } from '../../services/contact-us-pop-up.service';

@Component({
  selector: 'app-nav-bar-mobile',
  templateUrl: './nav-bar-mobile.component.html',
  styleUrls: ['./nav-bar-mobile.component.scss']
})
export class NavBarMobileComponent implements OnInit {
  showContactUs = false;
  
  constructor(private contactUsService: ContactUsService) { }

  ngOnInit(): void {
    this.contactUsService.openCloseService.subscribe(
      (flag: boolean) => {
        this.showContactUs = flag;
      }
    ) 
  }

  showContactUsFunc(): void {
    this.contactUsService.openCloseService.next(true);
  }
}
