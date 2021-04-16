import { Component, OnInit } from '@angular/core';
import{ LeaveManagementService} from '../../service/leave-management.service';
import{ Leave } from '../../model/leave-management';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { LeaveRequestComponent } from '../leave-request/leave-request.component';
import { DeletecomponentComponent } from '../deletecomponent/deletecomponent.component';
import{ MatSnackBar} from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
@Component({
  selector: 'app-leavemanagement-list',
  templateUrl: './leavemanagement-list.component.html',
  styleUrls: ['./leavemanagement-list.component.scss']
})
export class LeavemanagementListComponent implements OnInit {
leave: Leave[];
displayedColumns:string[]=['name','leavetype','reason','startdate','enddate','actions'];
  dataSource = new MatTableDataSource<any>();
  constructor(private leaveservice:LeaveManagementService, private dialog:MatDialog,private snackbar:MatSnackBar){}
  ngOnInit(): void {
    this.getData();
  }
  
  openConfirmDialog(msg){
    return this.dialog.open(DeletecomponentComponent,{
      width:'280px',
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
   this.dataSource=data;
    })
}
openEditDialog(leaveid:any){
  this.dialog.open(LeaveRequestComponent,{
    disableClose:true,
    width: '400px',
   height: '560px',
    data:{
      id:leaveid
    }
  });  

}
delete(id:any){
    this.openConfirmDialog("Do you want to delete this record?").afterClosed().subscribe(res=>{
      if(res){
        this.leaveservice.delete(id).subscribe((data:any)=>{  
            
        },err=>{
          this.snackbar.open('Deleted successfully', ' ', {
            duration: 3000,
          });
         this.getData();
        }
        );
      }
    });
}
}
