import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {
  // fix later
  reviews = [{email: 's.jhonson@gmail.com', username: 'Soren Johnson', text: 'I had a really positive experience buying a cat from this local business. The staff were friendly and approachable, and they gave me some really helpful advice about looking after my new furry friend. They had a great selection of cats to choose from, and I could tell that they were really passionate about what they do. Overall, I would definitely recommend this local business to anyone looking to buy a cat!'},
  {email: 'asd', username: 'Calliope Lee', text: "I was blown away by the service I received from these people when I purchased my new cat. The staff were incredibly helpful and went out of their way to ensure that I found the perfect cat for my family. They clearly care a lot about the animals in their care, and it shows in the quality of service they provide. I'm so happy with my new cat, and I would recommend this local business to anyone in the market for a new furry friend."},
  {email: 'asd', username: 'Kieran Martinez', text: 'I had a really great experience buying a cat from this local business. The staff were knowledgeable and provided me with all the information I needed to make an informed decision. They had a wide range of cats to choose from, and I was impressed by the cleanliness and overall condition of the facilities. My new cat is healthy, happy, and settling in nicely. I would definitely recommend this local business to anyone looking to add a new cat to their family.'}];
  // path = this.router.

  
  // reviewForm!: FormGroup;

  constructor(private router: Router) { }

  ngOnInit(): void {
    // this.reviewForm = new FormGroup({
    //   'username': new FormControl(),
    //   'text': new FormControl()
    // })
  }

  onSubmit(data: any) {
    // TODO...
  }
}
