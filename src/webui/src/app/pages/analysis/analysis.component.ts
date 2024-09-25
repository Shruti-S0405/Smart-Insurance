
import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { AnimationChartComponent } from '../animation-chart/animation-chart.component';
@Component({
  selector: 'app-analysis',
  standalone: true,
  imports: [HeaderComponent, DashboardComponent, AnimationChartComponent],
  templateUrl: './analysis.component.html',
  styleUrl: './analysis.component.css'
})
export class AnalysisComponent {

}
