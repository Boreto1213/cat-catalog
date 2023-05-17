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
  skeletons: number[] = [1, 2, 3, 4, 5, 6]

  isLoading = true;
  showMoreClickedFlag = false;
  selectedCat!: Cat;

  constructor(private catService: CatService, public route: ActivatedRoute) { }

  ngOnInit(): void {
    this.catService.loadCats();
    this.catService.getCats().subscribe( cats => {
      this.cats = cats;
      this.isLoading = false;
    });
  }

  onSave(): void {
    console.log(this.cats)
  }

}
