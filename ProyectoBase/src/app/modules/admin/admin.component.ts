import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-admin',
  template: `
    <app-header (logout)="logout($event)"></app-header>
    <section class="hero is-fullheight-with-navbar is-light">
        <div class="hero-body">
            <div class="container">
                <router-outlet></router-outlet>
            </div>
        </div>
        <div class="hero-foot">
            <app-footer></app-footer>
        </div>
    </section>
  `,
  styles: [`
    .hero-body {
        align-items: flex-start !important;
    }
  `]
})
export class AdminComponent implements OnInit {

  user;

  constructor(private authService: AuthService,
        private routing: Router) { }

  ngOnInit() {
    this.user = this.authService.currentUserValue;
  }

  logout(){
    this.authService.logout().subscribe(response => {
        this.routing.navigate(['/login']);
    });
}
}
