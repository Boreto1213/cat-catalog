import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Email } from '../models/email.model';
import { catchError, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
private url = "https://british-shorthair-illinois.herokuapp.com";
private fromEmail = "bodam02@abv.bg";
private toEmail = "gyokovg@gmail.com";

// Inject the HttpClient service in the constructor
constructor(private http: HttpClient) {}

// Define a function to send the email
sendEmail(emailData: Email) {
const data = {...emailData, apiKey: this.sendEmail, toEmail: this.toEmail, fromEmail: this.fromEmail}

  // Set up the HTTP headers with the API key
  const headers = new HttpHeaders({
    'Content-Type': 'application/json'
  });
  console.log(data);
  // Make a POST request to the SendGrid API to send the email
  this.http.post(this.url + "/emails/send", data, { headers })
    .pipe(
      tap(response => console.log(response)),
      catchError(error => {
        console.error(error);
        return throwError(error);
      })
    )
    .subscribe();
}
}
