import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { ContactUsService } from '../../services/contact-us-pop-up.service';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  showContactUs = false;

  constructor(private router: Router, private contactUsService: ContactUsService) { }

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
