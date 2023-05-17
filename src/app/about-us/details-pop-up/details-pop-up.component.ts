import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cat } from 'src/app/shared/models/cat.model';
import { CatService } from 'src/app/shared/services/cat.service';
import { animate, state, style, transition, trigger } from '@angular/animations'


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
  isMobile = false;
  cat!: Cat;
  photoIndx: number = 0;

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.isMobile = event.target.innerWidth < 900;
  }

  constructor(private route: ActivatedRoute, private catService: CatService, private router: Router) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.cat = this.catService.getCatById(id);
    this.isMobile = window.innerWidth < 900;


    // this.urls.push(this.cat.images[0]);
  }

  goBackToCatalog(): void {
    this.router.navigate(['/catalog']);
  }

  changePhoto(flag: boolean): void {
    if (flag) {
      this.photoIndx = ++this.photoIndx % this.cat.images.length;
    } else {
      this.photoIndx--;
      if (this.photoIndx < 0) {
        this.photoIndx = this.cat.images.length -1;
      }
    }

    // this.urls[0] = this.cat.img[this.photoIndx];

    // this.photoAnimationState = flag ? 'right' : 'left';
  }

}
