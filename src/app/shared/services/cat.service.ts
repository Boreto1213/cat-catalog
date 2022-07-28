import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Cat } from "../models/cat.model";

@Injectable()
export class CatService {
    

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
}