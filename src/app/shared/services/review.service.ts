import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Review } from '../models/review.model';
import { Observable, Subject } from 'rxjs';

// export type ReviewFilter = 'all' | 'accepted' | 'unaccepted'

export enum ReviewFilter {
  ALL = 'all',
  ACCEPTED = 'accepted',
  UNACCEPTED = 'unaccepted',
}

@Injectable({
  providedIn: 'root'
})
export class ReviewService {
  private url = 'http://localhost:5000/reviews';
  private reviewsSubject = new Subject<Review[]>()

  constructor(private http: HttpClient) { }

  loadReviews(filter: ReviewFilter): void {
    this.http.get<Review[]>(`${this.url}/${filter}`).subscribe(
      reviews => {
        this.reviewsSubject.next(reviews)
      }
    );
  }

  getAllReviews(): Observable<Review[]> {
    return this.reviewsSubject.asObservable();
  }

  createReview(review: Review): void {
     this.http.post(this.url + '/upload', review).subscribe(
      res => console.log(res)
     );
  }
}
