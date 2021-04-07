import { Injectable } from '@angular/core';
import{ Employee } from './model/employeeservice'
@Injectable({
  providedIn: 'root'
})
export class EmployeeserviceService {
employees: Employee[] = [
  {
    id: 1,
    name: "priyanga",
    email: "priyanga.m@rubixtek.com",
    phoneno: 9751185241
  }
];
  constructor() { }
  onGet(){
    return this.employees;
  }
}
