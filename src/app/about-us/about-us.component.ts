import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {
  // fix later
  reviews = [1, 2, 3];
  // path = this.router.

  
  // reviewForm!: FormGroup;

  constructor(private router: Router) { }

  ngOnInit(): void {
    // this.reviewForm = new FormGroup({
    //   'username': new FormControl(),
    //   'text': new FormControl()
    // })
  }


}
