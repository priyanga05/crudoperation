import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LeaveRequestComponent } from './leave-request/leave-request.component';
import{ LeavemanagementListComponent } from './leavemanagement-list/leavemanagement-list.component';
const routes: Routes = [
  //{ path: 'leave', component: LeaveRequestComponent },
  { path: 'leave/leave-list',component:LeavemanagementListComponent},
  { path: 'leave/add/:id', component: LeaveRequestComponent } ,
  { path: 'leave/edit/:id', component: LeaveRequestComponent } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class LeaveManagementRoutingModule { }