
import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
@Component({
  selector: 'app-analysis',
  standalone: true,
  imports: [HeaderComponent, DashboardComponent],
  templateUrl: './analysis.component.html',
  styleUrl: './analysis.component.css'
})
export class AnalysisComponent {

}
