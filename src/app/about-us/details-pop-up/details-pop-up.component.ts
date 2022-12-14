import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cat } from 'src/app/shared/models/cat.model';
import { CatService } from 'src/app/shared/services/cat.service';
import { animate, state, style, transition, trigger } from '@angular/animations'
import { ContactUsService } from 'src/app/shared/services/contact-us-pop-up.service';


@Component({
  selector: 'app-details-pop-up',
  templateUrl: './details-pop-up.component.html',
  styleUrls: ['./details-pop-up.component.scss'],
  animations: [
    trigger('leftRightFade', [
      state('right', style({ opacity: 1, transform: 'translateX(0)' })),
      state('left', style({ opacity: 1, transform: 'translateX(0)' })),

      transition('* => left', [
        style({ opacity: 0, transform: 'translateX(-50%)' }),
        animate(500)
      ]),
      transition('* => right', [
        style({ opacity: 0, transform: 'translateX(50%)' }),
        animate(500)
      ])
    ])
  ]
})
export class DetailsPopUpComponent implements OnInit {
  cat!: Cat;
  photoIndx: number = 0;
  // photoAnimationState: string = 'left';
  // urls: string[] = [];

  constructor(private route: ActivatedRoute, private catService: CatService, private router: Router, private contactUsService: ContactUsService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.cat = this.catService.getCatById(id);

    // this.urls.push(this.cat.img[0]);
  }

  goBackToCatalog(): void {
    this.router.navigate(['/catalog']);
  }

  changePhoto(flag: boolean): void {
    if (flag) {
      this.photoIndx = ++this.photoIndx % this.cat.img.length;
    } else {
      this.photoIndx--;
      if (this.photoIndx < 0) {
        this.photoIndx = this.cat.img.length -1;
      }
    }

    // this.urls[0] = this.cat.img[this.photoIndx];

    // this.photoAnimationState = flag ? 'right' : 'left';
  }

  goToContactUs(): void {
    this.router.navigate(['/catalog']);
    this.contactUsService.openCloseService.next(true);
  }
}
