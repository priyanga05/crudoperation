import { Component, OnInit } from '@angular/core';

import { EmployeeserviceService } from '../../service/employeeservice.service';
import{ Employee } from '../../model/employeeservice';
@Component({
  selector: 'app-empdetails',
  templateUrl: './empdetails.component.html',
  styleUrls: ['./empdetails.component.scss']
})
export class EmpdetailsComponent implements OnInit {
employees: Employee[];

  constructor(private employeeservice:EmployeeserviceService) { }

  ngOnInit(): void {
  // this.employees = this.employeeservice.onGet();
   this.getData();
  }
 getData(){
   this.employeeservice.getAll().subscribe((data:any)=>{
   console.log(data);
  this.employees=data;
   })
  }
  delete(id:any){
    this.employeeservice.delete(id).subscribe((data:any)=>{
      console.log("deleted");
     
      })
  }
}
