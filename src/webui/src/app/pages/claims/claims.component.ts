import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { FormsModule } from '@angular/forms'; 
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
  imports: [CommonModule, FormsModule, HeaderComponent], 
  templateUrl: './claims.component.html',
  styleUrls: ['./claims.component.css']
})
export class ClaimsComponent implements OnInit {

  claimDetails: ClaimDetail[] = []; 
  filteredClaimDetails: ClaimDetail[] = []; // For filtered claims

  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit(): void {
    this.fetchClaimDetails();
  }

  fetchClaimDetails(): void {
    this.dataService.getClaimDetailsHardcoded().subscribe(
      (response: any) => {
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

  onFilterChange(event: Event): void {
    const target = event.target as HTMLSelectElement;
    const filterValue = target.value;
    if (filterValue === 'all') {
      this.filteredClaimDetails = this.claimDetails;
    } else {
      this.filteredClaimDetails = this.claimDetails.filter(claim => claim.status === filterValue);
    }
  }
  navigateToStats(): void {
    this.router.navigate(['/analysis']); // Adjust route if necessary
  }
}


