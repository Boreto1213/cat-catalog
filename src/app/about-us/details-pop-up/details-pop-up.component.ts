import { Component, Input, OnInit } from '@angular/core';
import { Cat } from 'src/app/shared/models/cat.model';

@Component({
  selector: 'app-details-pop-up',
  templateUrl: './details-pop-up.component.html',
  styleUrls: ['./details-pop-up.component.scss']
})
export class DetailsPopUpComponent implements OnInit {
  @Input('cat') cat!: Cat;
  // cat: Cat = new Cat(1, "Richy", 'twelve', 'British', 'Male', 'Grey', 2300, '../../assets/images/images.jpeg');
  constructor() { }

  ngOnInit(): void {
  }

}
