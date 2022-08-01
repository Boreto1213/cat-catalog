// import { Component, ElementRef, Input, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
// import { ModalService } from '../../services/modal.service';

// @Component({
//   selector: 'app-pop-up-window',
//   templateUrl: './pop-up-window.component.html',
//   styleUrls: ['./pop-up-window.component.scss'],
//   encapsulation: ViewEncapsulation.None

// })
//  class PopUpWindowComponent implements OnInit, OnDestroy {
//   @Input() id!: string;
//   private element: any;

//   // add service
//   constructor(private el: ElementRef, private modalService: ModalService) {
//     this.element = el.nativeElement;
//   }

//   ngOnInit(): void {
//     if (!this.id) {
//       console.error("Modal needs to have an id!");
//       return;
//     }

//     // move element to the bottom of the page so it can be displayed above everithing else
//     document.appendChild(this.element);

//     this.element.addEventListener('click', (el: Element) => {
//       if (el.className == 'pop-up-modal') {
//         this.close();
//       }
//     });

//     this.modalService.add(this);
//   }

//   ngOnDestroy(): void {
//     this.modalService.remove(this.id);
//     this.element.remove();
//   }

//    opne() {
//     this.element.style.display = 'block';
//     document.body.classList.add('pop-up-modal-open');
// }

//     close() {
//     this.element.style.display = 'none';
//     document.body.classList.remove('pop-up-modal-open');

// }

// }
