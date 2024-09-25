import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';  // Import environment

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private hospitalApiUrl = environment.apiUrl + '/getAllServiceProviders';  // Use the correct URL from environment

  constructor(private http: HttpClient) {}

  // Fetch hospital data using the URL from the environment file
  getHospitals(): Observable<any> {
    return this.http.get(this.hospitalApiUrl);
  }

  // Hardcoded API call to get claim details
  getClaimDetailsHardcoded(): Observable<any> {
    const ClaimId = localStorage.getItem('claimid');
    const claimApiUrl = environment.apiUrl + '/claims/'+ClaimId;  
    return this.http.get(claimApiUrl);
  }

  getClaimStats(): Observable<any> {
    return this.http.get("https://dummyjson.com/c/e77a-a2c8-44d9-b6fe");
  }
}

// getMedication(userNAme: string| undefined): Observable<medication>{
//   let headers = new HttpHeaders();
//   headers = headers.set('Authorization', 'Bearer ' + localStorage.getItem('token'));
//   return this.http.get(this.apiUrl+userNAme+"/medicationCondition", {headers: headers}).pipe(map((response: any) => response));
// }