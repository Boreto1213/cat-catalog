import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(data: any, input: HTMLInputElement): void {
    console.log(data.photos);
    console.log(input);
    console.log(input.files);
  }
}
