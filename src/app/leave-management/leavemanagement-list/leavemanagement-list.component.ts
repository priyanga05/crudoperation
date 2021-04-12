import { Component, OnInit } from '@angular/core';
import{ LeaveManagementService} from '../../service/leave-management.service';
import{ Leave } from '../../model/leave-management';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { LeaveRequestComponent } from '../leave-request/leave-request.component';
import{ DeletecomponentComponent } from '../deletecomponent/deletecomponent.component';
@Component({
  selector: 'app-leavemanagement-list',
  templateUrl: './leavemanagement-list.component.html',
  styleUrls: ['./leavemanagement-list.component.scss']
})
export class LeavemanagementListComponent implements OnInit {
leave: Leave[];
 result:any;
  constructor(private leaveservice:LeaveManagementService, private dialog:MatDialog){}
  ngOnInit(): void {
    this.getData();
  }
  openDialog(){
    // if(){
      this.dialog.open(LeaveRequestComponent);
    // }
     
    // else{
    // dialogref.afterClosed()._subscribe((result) => { 
    // console.log('Dialog result:${result}');

    // });
    // }
  }
  
 
  getData(){
    this.leaveservice.getAll().subscribe((data:any)=>{
    console.log(data);
   this.leave=data;
    })
}
delete(id:any){
  this.leaveservice.delete(id).subscribe((data:any)=>{
    console.log("deleted");
   
    })
}
}
