import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  model: any;
  error: string;
  
  constructor(private authService: AuthService,
    private routing: Router) { }

  ngOnInit() {
    this.model = {
      email: '',
      password: ''
    };
  }

  onClick(e) {
    e.preventDefault();
    const { email, password } = this.model;
    this.authService.login(email, password).subscribe(response => {
      if (response.success){
        this.routing.navigate(['/admin']);
      }
      else{
        this.error = 'Usuario o password invalido';
      }
    })
  }
}
