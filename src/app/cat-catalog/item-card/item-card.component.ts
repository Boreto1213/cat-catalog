import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Cat } from 'src/app/shared/models/cat.model';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.scss']
})
export class ItemCardComponent implements OnInit {
  @Input('cat') cat!: Cat;
  @Output() showMoreClickedFlag = new EventEmitter<number>()

  constructor() { }

  ngOnInit(): void {
  }

  showMoreClicked(): void {
    console.log(this.cat.id)
    this.showMoreClickedFlag.emit(this.cat.id);
  } 
}
