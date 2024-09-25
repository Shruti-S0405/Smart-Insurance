import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { DataService } from '../../data.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { environment } from '../../../environments/environment.development';
import { Router } from '@angular/router'; // Import the Router service
import { DashboardComponent } from '../dashboard/dashboard.component';
import { FormsModule } from '@angular/forms'; 


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
  imports: [CommonModule, HttpClientModule, DashboardComponent, FormsModule],
  providers: [DataService],
  templateUrl: './hospitals.component.html',
  styleUrls: ['./hospitals.component.css']
})
export class HospitalsComponent implements OnInit {

  serviceProvider: ServiceProvider[] = [];
  filteredServiceProvider: ServiceProvider[] = []; // Filtered data array
  searchQuery: string = ''; // For storing the search input
  hospitalApiurl: string = environment.apiUrl; // Ensure this matches the environment file property

  constructor(private dataService: DataService, private router: Router) { } // Inject the Router

  ngOnInit(): void {
    this.fetchHospitals();
  }

  fetchHospitals(): void {
    this.dataService.getHospitals().subscribe(
      (response: any) => {
        console.log(response);
        this.serviceProvider = response.serviceProviderDetails || [];
        this.filteredServiceProvider = this.serviceProvider; // Initialize filtered data
      },
      (error) => {
        console.error('Error fetching hospital data', error);
      }
    );
  }

  filterData(): void {
    if (this.searchQuery.trim() === '') {
      this.filteredServiceProvider = this.serviceProvider; // If no search query, show all
    } else {
      const query = this.searchQuery.toLowerCase();
      this.filteredServiceProvider = this.serviceProvider.filter(provider =>
        provider.provider_id.toString().includes(query)
      );
    }
  }

  viewDetails(provider: ServiceProvider): void {
    // Navigate to the ClaimsComponent with the provider_id
    localStorage.setItem('claimid', provider.provider_id.toString());
    localStorage.setItem('providername', provider.name);
    localStorage.setItem('totalclaims', provider.no_of_claims.toString());

    this.router.navigate(['/claims', provider.provider_id]);
  }
}
