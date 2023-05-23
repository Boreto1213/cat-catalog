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

  addCat(): void {
    const newCat: Cat = {
      name: 'Lola',
      breed: 'British Shorthair',
      color: 'Lilac',
      sex: 'Male',
      born: '3 April 2023',
      images: [
        '../../assets/cat-images/6/lola-1.jpg',
        '../../assets/cat-images/6/lola-2.jpg',
        '../../assets/cat-images/6/lola-3.jpg',
        '../../assets/cat-images/6/lola-4.jpg',
      ],
      price: 1200
    };

    this.catService.uploadCat(newCat);
  }
}
