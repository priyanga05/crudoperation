import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import{ LeaveManagementService} from '../../service/leave-management.service';
import { MatDialog,MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-leave-request',
  templateUrl: './leave-request.component.html',
  styleUrls: ['./leave-request.component.scss']
})
export class LeaveRequestComponent implements OnInit {
leavereq: FormGroup;
id:number;
header: String;
editmode:boolean=false;

constructor(private router:ActivatedRoute,private fb:FormBuilder,private snackbar:MatSnackBar, @Inject(MAT_DIALOG_DATA) public data:any,private leaveservice:LeaveManagementService,private route:Router, private dialog:MatDialog,private dialogref:MatDialogRef<LeaveRequestComponent>,) { }

  ngOnInit(): void {
    this.id = this.data.id;
    console.log(this.id);
  
    
    this.leavereq=this.fb.group({

      name: [""],
      leavetype:[""],
      reason:[""],
      startdate:[],
      enddate:[]
    })
    
    if(this.id!=0){
      this.header ='Edit Leave';
      this.getId();
    this.editmode=true;  
    }
    else{
      this.header ='Add Leave';
      this.editmode=false;
    }
  } 
  getId(){
    this.leaveservice.getById(this.id).subscribe(data=>{this.leavereq.patchValue(data)});
  }
  Submit(){
    if(this.editmode){
      this.leaveservice.update(this.id,this.leavereq.value).subscribe();
      this.route.navigateByUrl("/leave/leave-list");
      this.dialogref.close();
    }  
    else{
      console.log(this.leavereq.value);

      this.leaveservice.Add(this.leavereq.value).subscribe();
      this.dialogref.close();
      console.log("user added");
      this.route.navigateByUrl("/leave/leave-list");
    }    
  }  
  // this.snackbar.open('Added successfully', ' ', {
  //   duration: 3000,
  // });
  // this.snackbar.open('Edited successfully', ' ', {
  //   duration: 3000,
  // });
  
  onCancel(){
    this.leavereq.reset();
    this.dialogref.close();
  }
}
