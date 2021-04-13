import { Component, OnInit } from '@angular/core';
import{ LeaveManagementService} from '../../service/leave-management.service';
import{ Leave } from '../../model/leave-management';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { LeaveRequestComponent } from '../leave-request/leave-request.component';
import { DeletecomponentComponent } from '../deletecomponent/deletecomponent.component';
import{ MatSnackBar} from '@angular/material/snack-bar';
@Component({
  selector: 'app-leavemanagement-list',
  templateUrl: './leavemanagement-list.component.html',
  styleUrls: ['./leavemanagement-list.component.scss']
})
export class LeavemanagementListComponent implements OnInit {
leave: Leave[];
 result:any;
  constructor(private leaveservice:LeaveManagementService, private dialog:MatDialog,private snackbar:MatSnackBar){}
  ngOnInit(): void {
    this.getData();
  }
  openDialog(){ 
      this.dialog.open(LeaveRequestComponent,{
        disableClose:true,
        data:{
          id:"0"
        } ,
      });
  }
  openEditDialog(leaveid:any){
    this.dialog.open(LeaveRequestComponent,{
      disableClose:true,
      data:{
        id:leaveid
      }
    });  
  }
  openConfirmDialog(msg){
    return this.dialog.open(DeletecomponentComponent,{
      width:'390px',
      panelClass :'confirm-dialog-container',
      disableClose:true,
      data:{
        message:msg
      }
    });
  
  }
 
  getData(){
    this.leaveservice.getAll().subscribe((data:any)=>{
    console.log(data);
   this.leave=data;
    })
}
delete(id:any){
    this.openConfirmDialog("Are you sure want to delete this record?").afterClosed().subscribe(res=>{
      if(res){
        this.leaveservice.delete(id).subscribe((data:any)=>{  
            
        },err=>{
          this.snackbar.open('Deleted successfully', ' ', {
            duration: 3000,
          });
        }
        );
      }
    });
}
}
