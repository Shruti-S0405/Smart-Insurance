// import { Component } from '@angular/core';
// import { AuthService } from '@auth0/auth0-angular';

// @Component({
//   selector: 'app-root',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })
// export class LoginComponent {
//   constructor(public auth: AuthService) {}

//   login(): void {
//     this.auth.loginWithRedirect();
//   }

//   logout(): void {
//     this.auth.logout();
//   }
// }

import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';  // This imports the Auth0 service

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private auth: AuthService) {}

  ngOnInit(): void {
    // Automatically redirect to Auth0 login page when component loads
    this.auth.loginWithRedirect();
  }
}
