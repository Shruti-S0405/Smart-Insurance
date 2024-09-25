import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { FormsModule } from '@angular/forms'; 
import { Router } from '@angular/router';
import { DataService } from '../../data.service';
import { HeaderComponent } from '../header/header.component';
import { DashboardComponent } from '../dashboard/dashboard.component';

export interface ClaimDetail {
  claim_id: number;
  service_name: string;
  ai_check: string;
  status: string;
}

@Component({
  selector: 'app-claims',
  standalone: true,
  imports: [CommonModule, FormsModule, HeaderComponent, DashboardComponent], 
  templateUrl: './claims.component.html',
  styleUrls: ['./claims.component.css']
})
export class ClaimsComponent implements OnInit {

  claimDetails: ClaimDetail[] = []; 
  filteredClaimDetails: ClaimDetail[] = []; 
  hospitalName: string = 'Unknown Hospital'; 
  searchTerm: string = ''; // Property to store search term

  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit(): void {
    const storedHospitalName = localStorage.getItem('providername');
    if (storedHospitalName) {
      this.hospitalName = storedHospitalName;
    } else {
      this.hospitalName = 'Unknown Hospital'; 
    }

    this.fetchClaimDetails();
  }

  fetchClaimDetails(): void {
    this.dataService.getClaimDetailsHardcoded().subscribe(
      (response: any) => {
        console.log(response);
        this.claimDetails = response.claimDetails;
        this.filteredClaimDetails = this.claimDetails; // Initialize filtered claims
      },
      (error) => {
        console.error('Error fetching claim details', error);
      }
    );
  }

  onStatusChange(claimId: number, event: Event): void {
    const target = event.target as HTMLSelectElement; 
    const newStatus = target.value;
    const claim = this.claimDetails.find(c => c.claim_id === claimId);
    if (claim) {
      claim.status = newStatus;
    }
  }

  // Search functionality based on Claim ID
  onSearchTermChange(): void {
    if (this.searchTerm.trim() === '') {
      this.filteredClaimDetails = this.claimDetails; // Reset if no search term
    } else {
      this.filteredClaimDetails = this.claimDetails.filter(claim =>
        claim.claim_id.toString().includes(this.searchTerm)
      );
    }
  }

  onFilterChange(event: Event): void {
    const target = event.target as HTMLSelectElement;
    const filterValue = target.value;
    if (filterValue === 'all') {
      this.filteredClaimDetails = this.claimDetails;
    } else if (filterValue === 'approved' || filterValue === 'rejected' || filterValue === 'pending') {
      this.filteredClaimDetails = this.claimDetails.filter(claim => claim.status === filterValue);
    } else {
      this.filteredClaimDetails = this.claimDetails.filter(claim => claim.ai_check === filterValue);
    }
  }

  navigateToStats(): void {
    this.router.navigate(['/analysis']); // Adjust route if necessary
  }
<<<<<<< HEAD
}
=======
}
>>>>>>> d6dccc344b05023d0fa7d85e04a7d865b16f6b0e
