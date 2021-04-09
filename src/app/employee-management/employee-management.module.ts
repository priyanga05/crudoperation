import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeManagementRoutingModule } from './employee-management-routing.module';
import{ManageemployeeComponent } from './manageemployee/manageemployee.component'
import { EmpdetailsComponent } from './empdetails/empdetails.component';
import{ SharedModule} from '../shared/shared.module';
@NgModule({
  declarations: [EmpdetailsComponent,ManageemployeeComponent],
  imports: [
    CommonModule,
    EmployeeManagementRoutingModule,
    SharedModule
  ]
})
export class EmployeeManagementModule { }
