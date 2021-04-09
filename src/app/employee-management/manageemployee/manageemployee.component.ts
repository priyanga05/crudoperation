import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeserviceService } from '../../service/employeeservice.service';

@Component({
  selector: 'app-manageemployee',
  templateUrl: './manageemployee.component.html',
  styleUrls: ['./manageemployee.component.scss']
})
export class ManageemployeeComponent implements OnInit {
  id: number;
  header: String;
  form: FormGroup;
 editmode:boolean=false;
   constructor(private route: ActivatedRoute, private fb: FormBuilder, private empservice: EmployeeserviceService, private router: Router) { }
 
   ngOnInit(): void {
     this.id = +this.route.snapshot.paramMap.get('id');
     console.log(this.id);
   
     this.header = this.id === 0? 'Add Employee' : 'Edit Employee';
      this.form=this.fb.group({
        id:[],
        name:[""],
        email:[""],
        phoneno:[]
      });  
      
      if(this.id!=0){
       this.getId();
     this.editmode=true;
     }
     else{
       this.editmode=false;
 
     }
     
   }
   getId(){
     this.empservice.getById(this.id).subscribe(data=>{this.form.patchValue(data)});
   }
 onSubmit(){
   if(this.editmode){
     this.empservice.update(this.id,this.form.value).subscribe();
     this.router.navigateByUrl("");
   }
   else{
     console.log(this.form.value);
     this.empservice.Add(this.form.value).subscribe();
    console.log("user added");
    this.router.navigateByUrl("");
   }
   
 
 }  
   }
 
 
 
 