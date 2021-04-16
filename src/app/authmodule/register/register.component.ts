import { Component, OnInit } from '@angular/core';
import{  FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import{ Registration } from '../../model/Registration';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
register:FormGroup;
resgitration:Registration[];
  constructor(private fb:FormBuilder, private route:Router) { }

  ngOnInit(): void {
    this.register=this.fb.group({
      Username:["",Validators.required],
      email:["", Validators.required],
      password:["",[Validators.required,Validators.minLength(6)]],
      ConfrimPassword:["",Validators.required]
    })
  }
signUp(){
  this.resgitration=this.register.value;
  console.log(this.register.value);
  this.route.navigateByUrl("");
}
}
