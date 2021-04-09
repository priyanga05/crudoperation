import { Component, OnInit } from '@angular/core';
import{ LeaveManagementService} from '../../service/leave-management.service';
import{ Leave } from '../../model/leave-management';
@Component({
  selector: 'app-leavemanagement-list',
  templateUrl: './leavemanagement-list.component.html',
  styleUrls: ['./leavemanagement-list.component.scss']
})
export class LeavemanagementListComponent implements OnInit {
leave: Leave[];
  constructor(private leaveservice:LeaveManagementService) { }

  ngOnInit(): void {
    this.getData();
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
