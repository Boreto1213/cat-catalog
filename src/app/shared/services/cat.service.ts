import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cat } from '../models/cat.model';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CatService {
  url: string = 'https://british-shorthair-illinois.herokuapp.com/cats';
  cats: Cat[] = [];
  private catsSubject = new Subject<Cat[]>();

  constructor(private http: HttpClient) {
    this.loadCats()
  }

  uploadCats(cats: Cat[]): void {
      this.http.put<Cat[]>(this.url, cats).subscribe(
          res => {
              console.log(res);
          }
      );
  }

  fetchCats(): Observable<Cat[]> {
      return this.http.get<Cat[]>(this.url);
  }

  loadCats(): void {
      this.fetchCats().subscribe(cats => {
          this.cats = cats;
          this.catsSubject.next(this.cats);
      });
  }

  getCats(): Observable<Cat[]> {
      return this.catsSubject.asObservable();
  }

  uploadCat(cat: Cat): void {
    this.http.post(this.url + "/upload", cat).subscribe(
      res => console.log(res)
    );
  }

  getCatById(id: string): Cat {
      return this.cats.find(cat => cat._id === id) as Cat;
  } 
}
