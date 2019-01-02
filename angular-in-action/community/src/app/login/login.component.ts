import { Component, OnInit, Query } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string = '';
  password: string = '';
  return: string = '';

  constructor(
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.route.params.subscribe((params: Query) => {
      this.return = params['return'] || '/forums';
      if (!this.userService.isGuest()) {
        this.go();
      }
    });
  }

  login() {
    if (this.username && this.password) {
      this.userService.login(this.username);
      this.go();
    }
  }

  go(): void {
    this.router.navigateByUrl(this.return);
  }
}
