import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmpdetailsComponent } from './empdetails/empdetails.component';

const routes: Routes = [
  { path: 'emp', component: EmpdetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
