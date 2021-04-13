import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeaveRequestComponent } from './leave-request/leave-request.component';
import{ SharedModule} from '../shared/shared.module';
import { LeavemanagementListComponent } from './leavemanagement-list/leavemanagement-list.component';
import { LeaveManagementRoutingModule } from './leave-management-routing.module';
import { DeletecomponentComponent } from './deletecomponent/deletecomponent.component';



@NgModule({
  declarations: [LeaveRequestComponent, LeavemanagementListComponent, DeletecomponentComponent],
  entryComponents:[
    LeaveRequestComponent
  ],
  imports: [
    CommonModule,
    LeaveManagementRoutingModule,
    SharedModule
  ]
})
export class LeaveManagementModule { }
