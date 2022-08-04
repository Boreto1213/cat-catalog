import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactUsService } from '../shared/services/contact-us-pop-up.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor(private router: Router, public route: ActivatedRoute, private contactUsService: ContactUsService) { }

  ngOnInit(): void {
  }

  toCatalog(): void {
    this.router.navigate(['/catalog']);
  }

  toContactUs(): void {
    this.contactUsService.openCloseService.next(true);
  }
}
