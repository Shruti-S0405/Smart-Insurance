import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { MainComponent } from './pages/main/main.component';
import { ClaimsComponent } from './pages/claims/claims.component';
import { AnalysisComponent } from './pages/analysis/analysis.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },  
  { path: '', component: LoginComponent },         
  { path: 'main', component: MainComponent } ,
  { path: 'claims/:provider_id', component: ClaimsComponent } ,
  { path: 'analysis', component: AnalysisComponent }          
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
