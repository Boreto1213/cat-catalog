import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Review } from '../shared/models/review.model';
import { ReviewFilter, ReviewService } from '../shared/services/review.service';
import { NgToastService } from 'ng-angular-popup';

interface FormData {
  name: string;
  email: string;
  content: string;
}
@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {
  reviews: Review[] = [];
  // reviews = [
  // {email: 's.jhonson@gmail.com', author: 'Soren Johnson', content: 'I had a really positive experience buying a cat from this local business. The staff were friendly and approachable, and they gave me some really helpful advice about looking after my new furry friend. They had a great selection of cats to choose from, and I could tell that they were really passionate about what they do. Overall, I would definitely recommend this local business to anyone looking to buy a cat!', accepted: false, date: new Date()},
  // {email: 'c.lee@gmail.com', author: 'Calliope Lee', content: "I was blown away by the service I received from these people when I purchased my new cat. The staff were incredibly helpful and went out of their way to ensure that I found the perfect cat for my family. They clearly care a lot about the animals in their care, and it shows in the quality of service they provide. I'm so happy with my new cat, and I would recommend this local business to anyone in the market for a new furry friend.", accepted: false, date: new Date()},
  // {email: 'k.martinez@gmail.com', author: 'Kieran Martinez', content: 'I had a really great experience buying a cat from this local business. The staff were knowledgeable and provided me with all the information I needed to make an informed decision. They had a wide range of cats to choose from, and I was impressed by the cleanliness and overall condition of the facilities. My new cat is healthy, happy, and settling in nicely. I would definitely recommend this local business to anyone looking to add a new cat to their family.', accepted: false, date: new Date()},
  // ];
  
  constructor(private reviewService: ReviewService,  private toastService: NgToastService) { }

  ngOnInit(): void {
    this.reviewService.loadReviews(ReviewFilter.ACCEPTED);
    this.reviewService.getAllReviews().subscribe(
      reviews => {
        this.reviews = reviews;
        console.log(reviews);
      }
    );
  }

  onSubmit(form: NgForm) {
    const {name: author, email, content }: FormData = form.value;
    if (author !== "" && email !== "" && content !== "") {
      const review: Review = {author, email, content, accepted: false, date: new Date(), _id: ""}
      this.reviewService.createReview(review);
      form.reset();
      this.toastService.info({detail: 'Disclaimer',summary: 'Client info will be checked before upload!', position: 'tr', duration: 5000});
    } else {
      this.toastService.error({detail: 'Error',summary: 'All fields are mandatory!', position: 'tr', duration: 5000});
    }
  }
}
