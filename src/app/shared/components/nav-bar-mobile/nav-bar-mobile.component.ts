import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar-mobile',
  templateUrl: './nav-bar-mobile.component.html',
  styleUrls: ['./nav-bar-mobile.component.scss']
})
export class NavBarMobileComponent implements OnInit {
  showContactUs = false;
  
  constructor() { }

  ngOnInit(): void { }
}
