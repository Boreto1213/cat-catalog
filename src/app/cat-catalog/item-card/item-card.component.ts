import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Cat } from 'src/app/shared/models/cat.model';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.scss']
})
export class ItemCardComponent implements OnInit {
  @Input('cat') cat!: Cat;
  @ViewChild('image') image!: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  onHover(): void {
    this.image.nativeElement.style.backgroundImage = `url(${this.cat.img[1]})`;
  }

  onLeave(): void {
    this.image.nativeElement.style.backgroundImage = `url(${this.cat.img[0]})`;
  }
}
