import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { HospitalsComponent } from "../hospitals/hospitals.component";

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [HeaderComponent, HospitalsComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

}
