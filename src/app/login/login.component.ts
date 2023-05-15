import { Component, OnInit } from '@angular/core';
import { User } from '../shared/models/user.model';
import { UserService } from '../shared/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
// Add authorization

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(data: User) {
    this.userService.loadUsers();
    this.userService.getUsers().subscribe(users => {
      let userMatch = users.find(user => user.password === data.password && user.email === data.email);
      if (userMatch) {
        this.router.navigate(['/admin']);
      } else {
        // Show error message...
      }
    });
  }
}
