import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  isMobile = false;



  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.isMobile = event.target.innerWidth < 900;
  }

  constructor(private router: Router, public route: ActivatedRoute) { }

  ngOnInit() {
    this.isMobile = window.innerWidth < 900;
    console.log(this.isMobile)
  }

  toCatalog(): void {
    this.router.navigate(['/catalog']);
  }

  toContactUs(): void {
    this.router.navigate(['/contact-us']);
  }
}
