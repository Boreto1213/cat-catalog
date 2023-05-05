import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isMobile = false;

  constructor() {}

  ngOnInit() {
    this.isMobile = window.innerWidth < 900;
    console.log(this.isMobile)
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.isMobile = event.target.innerWidth < 900;
  }
}
