// import { Component, OnInit } from '@angular/core';
// import { CommonModule } from '@angular/common'; // Import CommonModule
// import { Router } from '@angular/router';
// import { DataService } from '../../data.service';
// import { HeaderComponent } from '../header/header.component';

// export interface ClaimDetail {
//   claim_id: number;
//   service_name: string;
//   ai_check: string;
//   status: string;
// }

// @Component({
//   selector: 'app-claims',
//   standalone: true,
//   imports: [CommonModule, HeaderComponent], // Add CommonModule here
//   templateUrl: './claims.component.html',
//   styleUrls: ['./claims.component.css']
// })
// export class ClaimsComponent implements OnInit {

//   claimDetails: ClaimDetail[] = [];  // Array to store claim details

//   constructor(private dataService: DataService, private router: Router) { }

//   ngOnInit(): void {
//     this.fetchClaimDetails();
//   }

//   // Fetch claim details using the service
//   fetchClaimDetails(): void {
//     this.dataService.getClaimDetailsHardcoded().subscribe(
//       (response: any) => {
//         this.claimDetails = response.claimDetails;
//       },
//       (error) => {
//         console.error('Error fetching claim details', error);
//       }
//     );
//   }
// }
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { Router } from '@angular/router';
import { DataService } from '../../data.service';
import { HeaderComponent } from '../header/header.component';

export interface ClaimDetail {
  claim_id: number;
  service_name: string;
  ai_check: string;
  status: string;
}

@Component({
  selector: 'app-claims',
  standalone: true,
  imports: [CommonModule, FormsModule, HeaderComponent], // Import FormsModule
  templateUrl: './claims.component.html',
  styleUrls: ['./claims.component.css']
})
export class ClaimsComponent implements OnInit {

  claimDetails: ClaimDetail[] = [];  // Array to store claim details

  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit(): void {
    this.fetchClaimDetails();
  }

  // Fetch claim details using the service
  fetchClaimDetails(): void {
    this.dataService.getClaimDetailsHardcoded().subscribe(
      (response: any) => {
        this.claimDetails = response.claimDetails;
      },
      (error) => {
        console.error('Error fetching claim details', error);
      }
    );
  }

  // Handle status change
  onStatusChange(claimId: number, event: Event): void {
    const target = event.target as HTMLSelectElement; // Type assertion
    const newStatus = target.value;
    const claim = this.claimDetails.find(c => c.claim_id === claimId);
    if (claim) {
      claim.status = newStatus;
    }
  }
}
