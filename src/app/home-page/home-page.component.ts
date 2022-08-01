import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor(private router: Router, public route: ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.route)
  }

  toCatalog(): void {
    this.router.navigate(['/catalog']);
  }
}
