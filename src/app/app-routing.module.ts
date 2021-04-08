import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{ManageemployeeComponent } from './manageemployee/manageemployee.component'
import { EmpdetailsComponent } from './empdetails/empdetails.component';

const routes: Routes = [
  { path: '', component: EmpdetailsComponent },
  { path: 'employee/add/:id',component: ManageemployeeComponent},
  { path: 'employee/edit/:id',component:ManageemployeeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
