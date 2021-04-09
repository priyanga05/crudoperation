import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpClientModule, HttpErrorResponse,HttpHeaders } from "@angular/common/http";
//import{ Employee } from './model/employeeservice'
@Injectable({
  providedIn: 'root'
})
export class EmployeeserviceService {


httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

  constructor(private http:HttpClient) { }
  // onGet(){
  //   return this.employees;
  // }
  Add(user:any):Observable<any>{
    return this.http.post<any>('http://localhost:3000/emp/',user,this.httpOptions);
  }
  getAll(){
    return this.http.get<any>('http://localhost:3000/emp',this.httpOptions);
  }
  getById(id:any):Observable<any>{
    return this.http.get<any>('http://localhost:3000/emp/'+id,this.httpOptions);
  }
  update(id:number,user:any):Observable<any>{
     return this.http.put<any>('http://localhost:3000/emp/'+id,user,this.httpOptions);
  }
  delete(id:any):Observable<any>{
    return this.http.delete<any>('http://localhost:3000/emp/'+id,this.httpOptions);
 }
  
}
