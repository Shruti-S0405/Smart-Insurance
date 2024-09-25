import { Component, OnInit } from '@angular/core';
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-animation-chart',
  standalone: true,
  imports: [CanvasJSAngularChartsModule, CommonModule, RouterOutlet],
  providers: [DataService],
  templateUrl: './animation-chart.component.html',
  styleUrls: ['./animation-chart.component.css']
})
export class AnimationChartComponent implements OnInit {
  legitimateClaims = 0;
  fraudulentClaims = 0;
  totalClaims = 0;
  chartOptions: any;  // Hold chart config

  ngOnInit(): void {
    console.log(this.fetchClaimStats()); 
    this.fetchClaimStats();  // Fetch the claim statistics when the component initializes
  }

  fetchClaimStats() {
    this.dataService.getClaimStats().subscribe(
      (response: any) => {
        console.log('API Response:', response);

        // Retrieve the claim ID from localStorage
        const providerId = localStorage.getItem('claimid') ?? ''; // Default to empty string if undefined
        console.log(providerId);

        if (providerId && response.claimStats[providerId]) {
          const providerData = response.claimStats[providerId];
          console.log(providerData);

          // Assign legitimate and fraudulent counts (handling null values)
          this.legitimateClaims = providerData.legitimate ?? 0;
          this.fraudulentClaims = providerData.fraudulent ?? 0;
          this.totalClaims = this.legitimateClaims + this.fraudulentClaims;

          // Re-initialize chart with updated data
          this.updateChartOptions();
        } else {
          console.error('Invalid provider ID or data not found.');
        }
      },
      (error) => {
        console.error('Error fetching claim data:', error);  // Log error appropriately
      }
    );
  }

  // Function to update chartOptions dynamically after receiving API data
  updateChartOptions() {
    console.log('Updating chart options');
    this.chartOptions = {
      animationEnabled: true,
      theme: "light2",
      exportEnabled: true,
      title: {
        text: "Legitimate vs Fraudulent Claims"
      },
      subtitles: [{
        text: "Claim Statistics"
      }],
      data: [{
        type: "pie",
        indexLabel: "{y} claims",
        indexLabelPlacement: "outside",
        toolTipContent: "{name}: {y} claims ({percentage}%)",
        innerRadius: 70,
        radius: "80%",
        showInLegend: true,
        dataPoints: [
          {
            name: "Legitimate",
            y: this.legitimateClaims,
            percentage: this.totalClaims > 0 
              ? ((this.legitimateClaims / this.totalClaims) * 100).toFixed(2) 
              : "0",
            color: "#058dc7",
            indexLabel: "{percentage}%"
          },
          {
            name: "Fraudulent",
            y: this.fraudulentClaims,
            percentage: this.totalClaims > 0 
              ? ((this.fraudulentClaims / this.totalClaims) * 100).toFixed(2) 
              : "0",
            color: "#f45b5b",
            indexLabel: "{percentage}%"
          }
        ]
      }],
      // Responsive settings for chart dimensions
      width: window.innerWidth * 0.8,  // 80% of viewport width
      height: window.innerHeight * 0.8  // 80% of viewport height
    };
  }

  constructor(private dataService: DataService) { }
}
