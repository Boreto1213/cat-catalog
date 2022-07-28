import { Component, OnInit } from '@angular/core';
import { Cat } from '../shared/models/cat.model';
import { CatService } from '../shared/services/cat.service';

@Component({
  selector: 'app-cat-catalog',
  templateUrl: './cat-catalog.component.html',
  styleUrls: ['./cat-catalog.component.scss']
})
export class CatCatalogComponent implements OnInit {
  cats: Cat[] = [];

  showMoreClickedFlag = false;
  selectedCat!: Cat;

  constructor(private catService: CatService) { }

  ngOnInit(): void {
    this.catService.fetchCats();
    this.cats = this.catService.getCats();
  }

  onSave(): void {
    // this.catService.uploadCats();
    console.log(this.cats)
  }

  onShowMoreClicked(id: number): void {
    console.error(id)
    this.selectedCat = this.cats.find(cat => cat.id == id) as Cat;

    this.showMoreClickedFlag = true;

  }

  // showMoreClicked(id: number = 0): void {
  //   if (id == 0) {
  //     this.showMoreClickedFlag = false;
  //   } else {
  //     this.selectedCat = this.cats.find(cat => cat.id == id) as Cat;
  //     console.log(this.selectedCat);

  //     this.showMoreClickedFlag = true;
  //   }
  // }
}
