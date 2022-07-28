import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cat } from 'src/app/shared/models/cat.model';
import { CatService } from 'src/app/shared/services/cat.service';

@Component({
  selector: 'app-details-pop-up',
  templateUrl: './details-pop-up.component.html',
  styleUrls: ['./details-pop-up.component.scss']
})
export class DetailsPopUpComponent implements OnInit {
  cat!: Cat;
  constructor(private route: ActivatedRoute, private catService: CatService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.cat = this.catService.getCatById(id);
  }

}
