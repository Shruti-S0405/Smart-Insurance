import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';  // This imports the Auth0 service
import { Router } from '@angular/router';  // This imports the Angular Router

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit(): void {
    // Check if the user is authenticated
    this.auth.isAuthenticated$.subscribe(isAuthenticated => {
      if (!isAuthenticated) {
        // If not authenticated, redirect to Auth0 login
        this.auth.loginWithRedirect();
      } else {
        // If authenticated, navigate to the main component page
        this.router.navigate(['/main']);  // Replace '/main' with your actual main component route
      }
    });
  }
}
