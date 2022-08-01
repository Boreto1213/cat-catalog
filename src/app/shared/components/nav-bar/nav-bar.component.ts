import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  showContactUs = false;

  constructor(public route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  }

  showContactInfo(): void {
    this.router.navigate(['contact-us'], {relativeTo: this.route})
  }
}
