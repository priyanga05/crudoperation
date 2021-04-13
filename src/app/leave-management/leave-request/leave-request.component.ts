import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import{ LeaveManagementService} from '../../service/leave-management.service';
import { MatDialog } from '@angular/material/dialog';
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
//wasFormChanged = false;
  constructor(private router:ActivatedRoute,private fb:FormBuilder, private leaveservice:LeaveManagementService,private route:Router, private dialog:MatDialog) { }

  ngOnInit(): void {
    this.id = +this.router.snapshot.paramMap.get('id');
    console.log(this.id);
  
    this.header = this.id === 0? 'Add Leave' : 'Edit Leave';
    this.leavereq=this.fb.group({

      name: [""],
      leavetype:[""],
      reason:[""],
      startdate:[],
      enddate:[]
    })
    if(this.id!=0){
      this.getId();
    this.editmode=true;
    }
    else{
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
      this.dialog.closeAll();
    }
    else{
      console.log(this.leavereq.value);
      this.leaveservice.Add(this.leavereq.value).subscribe();
      this.dialog.closeAll();
      console.log("user added");
      this.route.navigateByUrl("/leave/leave-list");
    }
    
  }
  onCancel(){
    this.dialog.closeAll();
  }

}
