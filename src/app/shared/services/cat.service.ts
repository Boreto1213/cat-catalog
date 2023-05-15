import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Cat } from "../models/cat.model";
import { Observable, Subject } from "rxjs";

@Injectable()
export class CatService {
    cats: Cat[] = [];
    private catsSubject = new Subject<Cat[]>();

    constructor(private http: HttpClient) {}

    uploadCats(cats: Cat[]): void {
        this.http.put<Cat[]>('https://ng-cource-reicpe-book-default-rtdb.europe-west1.firebasedatabase.app/cats.json', cats).subscribe(
            res => {
                console.log(res);
            }
        );
    }

    fetchCats(): Observable<Cat[]> {
        return this.http.get<Cat[]>('https://ng-cource-reicpe-book-default-rtdb.europe-west1.firebasedatabase.app/cats.json');
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

    // fetchCats(): void {
    //     this.http.get<Cat[]>('https://ng-cource-reicpe-book-default-rtdb.europe-west1.firebasedatabase.app/cats.json').subscribe(
    //         cats => {
    //             this.cats = cats;
    //             console.log("Cats from fetchCats: " + this.cats.length);
    //         }
    //         );
    // }

    // getCats(): Cat[] {
    //     console.log("Cats from getCats: " + this.cats.length);

    //     return this.cats.slice();
    // }

    getCatById(id: number): Cat {
        return this.cats.find(cat => cat.id == id) as Cat;
    } 
}