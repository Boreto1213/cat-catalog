import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { User } from '../models/user.model';

@Injectable()
export class UserService {
    private usersSubject = new Subject<User[]>();

    constructor(private http: HttpClient) {}

    loadUsers(): void {
        this.http.get<User[]>('https://ng-cource-reicpe-book-default-rtdb.europe-west1.firebasedatabase.app/users.json').subscribe(users => {
            this.usersSubject.next(users);
        });
    }

    getUsers(): Observable<User[]> {
        return this.usersSubject.asObservable();
    }
}