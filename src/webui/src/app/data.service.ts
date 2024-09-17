import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';  // Import environment

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private hospitalApiUrl = environment.apiUrl;  // Use the correct URL from environment

  constructor(private http: HttpClient) {}

  // Fetch hospital data using the URL from the environment file
  getHospitals(): Observable<any> {
    return this.http.get(this.hospitalApiUrl);
  }

  // Hardcoded API call to get claim details
  getClaimDetailsHardcoded(): Observable<any> {
    const claimApiUrl = 'https://dummyjson.com/c/1db3-6a81-4a0a-b7cd/claims';  // Hardcoded API for claims
    return this.http.get(claimApiUrl);
  }
}
