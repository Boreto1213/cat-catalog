import { Component, Input, OnInit } from '@angular/core';
import { Review } from 'src/app/shared/models/review.model';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss']
})
export class ReviewComponent implements OnInit {
  @Input() review!: Review;
  // @Input() username: string = 'Ispleskal Karaman';
  // @Input() text: string = 'I am very content. My experince with the lord of kitties is simply amazing! I highly recomend his services! ;)';

  constructor() {

   }

  ngOnInit(): void {
  }

}
