import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(public auth: AuthService, private router: Router){

  }

  signOut() {
    localStorage.clear();
    console.log('Signing out...');
    this.auth.logout();
    this.router.navigate(['/']);
  }
}
