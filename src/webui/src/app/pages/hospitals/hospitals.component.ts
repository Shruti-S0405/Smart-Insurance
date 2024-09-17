import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { environment } from '../../../environments/environment.development';

export interface ServiceProvider {
  provider_id: number;
  name: string;
  provider_type: string;
  region_id: number;
  status: string;
  no_of_claims: number;
}

export interface ServiceProviderDetails {
  serviceProviderDetails: ServiceProvider[];
}


@Component({
  selector: 'app-hospitals',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  providers: [DataService, HttpClientModule],
  templateUrl: './hospitals.component.html',
  styleUrl: './hospitals.component.css'
})
export class HospitalsComponent implements OnInit {

  serviceProvider: ServiceProvider[] = [];

  x:string = environment.apiUrl;

  ngOnInit(): void {
    this.dataService.getHospitals(this.x).subscribe(
      (response: any) => {
        console.log(response);
        this.serviceProvider = response.serviceProviderDetails; 
      },
      (error) => {
        console.error('Error fetching data', error);
      }
    );
  }
  

  constructor(private dataService: DataService){ }
}
