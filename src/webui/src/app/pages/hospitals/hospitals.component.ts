import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { environment } from '../../../environments/environment.development';
import { Router } from '@angular/router'; // Import the Router service

export interface ServiceProvider {
  provider_id: number;
  name: string;
  provider_type: string;
  region_id: string;
  status: string;
  no_of_claims: number;
}

@Component({
  selector: 'app-hospitals',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  providers: [DataService],
  templateUrl: './hospitals.component.html',
  styleUrls: ['./hospitals.component.css']
})
export class HospitalsComponent implements OnInit {

  serviceProvider: ServiceProvider[] = [];
  hospitalApiurl: string = environment.apiUrl; // Ensure this matches the environment file property

  constructor(private dataService: DataService, private router: Router) { } // Inject the Router

  ngOnInit(): void {
    this.fetchHospitals();
  }

  fetchHospitals(): void {
    this.dataService.getHospitals().subscribe( // Call method without arguments
      (response: any) => {
        console.log(response);
        this.serviceProvider = response.serviceProviderDetails || [];
      },
      (error) => {
        console.error('Error fetching hospital data', error);
      }
    );
  }


  viewDetails(provider: ServiceProvider): void {
    // Navigate to the ClaimsComponent with the provider_id
    localStorage.setItem('claimid', provider.provider_id.toString());
    localStorage.setItem('providername', provider.name);
    localStorage.setItem('totalclaims', provider.no_of_claims.toString());

    this.router.navigate(['/claims', provider.provider_id]);

  }
}
