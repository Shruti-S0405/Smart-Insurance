import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';

import { AuthModule } from '@auth0/auth0-angular'; // Auth0 import
import { AppRoutingModule } from './app.routes'; // If you have routing

@NgModule({
  declarations: [
    AppComponent,LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule, // Import routing module if you use it
    AuthModule.forRoot({
      domain: 'dev-k1nosdcwl88uskcx.us.auth0.com', // Replace with your Auth0 domain
      clientId: 'FymGp4gYalxGNUSuHZFEOwguICJehRps', // Replace with your Auth0 client ID
      authorizationParams: {
        redirect_uri: window.location.origin, // Redirect URI after login
      }
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
