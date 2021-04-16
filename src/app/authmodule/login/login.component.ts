import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
// import{ RegisterComponent } from '../register/register.component';
import{ MatCardModule } from '@angular/material/card';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
login:FormGroup;
  constructor(private fb:FormBuilder, private route:Router) { }

  ngOnInit(): void {
    this.login=this.fb.group({
      email:["",Validators.required],
      password:["",[Validators.required,Validators.minLength(6)]]
    })
  }
  Login(){ 
    console.log(this.login.value);
    this.route.navigateByUrl("/leave/leave-list");
  }
  signUp(){
    this.route.navigateByUrl("/register");
  }
 
}
