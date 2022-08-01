import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

  constructor(private catService: CatService, public route: ActivatedRoute) { }

  ngOnInit(): void {
    this.catService.fetchCats();
    this.cats = this.catService.getCats();
  }

  onSave(): void {
    // this.catService.uploadCats();
    console.log(this.cats)
  }

}
