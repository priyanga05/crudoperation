import { Component, OnInit } from '@angular/core';
import { EmployeeserviceService } from '../employeeservice.service';
import{ Employee } from '../model/employeeservice';
@Component({
  selector: 'app-empdetails',
  templateUrl: './empdetails.component.html',
  styleUrls: ['./empdetails.component.scss']
})
export class EmpdetailsComponent implements OnInit {
employees: Employee[];
  constructor(private employeeservice:EmployeeserviceService) { }

  ngOnInit(): void {
   this.employees = this.employeeservice.onGet();
  }

}
