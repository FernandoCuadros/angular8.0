import { Component, OnInit } from '@angular/core';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-login',
  template: `
    <section class="hero is-fullheight is-light">
      <div class="hero-body">
          <div class="container">
              <router-outlet></router-outlet>
          </div>
      </div>
    </section>
  `,
  styles: [`
    .hero-body {
        align-items: flex-start !important;
    }
  `]
})
export class LoginComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit() {
  }
}
