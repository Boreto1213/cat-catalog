import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Cat } from "../models/cat.model";

@Injectable()
export class CatService {
    cats: Cat[] = [];

    constructor(private http: HttpClient) {}

    uploadCats(cats: Cat[]): void {
        this.http.put<Cat[]>('https://ng-cource-reicpe-book-default-rtdb.europe-west1.firebasedatabase.app/cats.json', cats).subscribe(
            res => {
                console.log(res);
            }
        );
    }

    fetchCats(): void {
        this.http.get<Cat[]>('https://ng-cource-reicpe-book-default-rtdb.europe-west1.firebasedatabase.app/cats.json').subscribe(
            cats => this.cats = cats
            );
    }

    getCats(): Cat[] {
        return this.cats;
    }

    getCatById(id: number): Cat {
        return this.cats.find(cat => cat.id == id) as Cat;
    } 
}