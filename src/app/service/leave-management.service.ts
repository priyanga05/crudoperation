import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpClientModule, HttpErrorResponse,HttpHeaders } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class LeaveManagementService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private httpclient:HttpClient) { }
  Add(user:any):Observable<any>{
  return this.httpclient.post<any>('http://localhost:3000/leave/',user,this.httpOptions);
  }
  getAll(){
    return this.httpclient.get<any>('http://localhost:3000/leave',this.httpOptions);
  }
  getById(id:any):Observable<any>{
    return this.httpclient.get<any>('http://localhost:3000/leave/'+id,this.httpOptions);
  }
  delete(id:any):Observable<any>{
    return this.httpclient.delete<any>('http://localhost:3000/leave/'+id,this.httpOptions);
 }
 update(id:number,user:any):Observable<any>{
  return this.httpclient.put<any>('http://localhost:3000/leave/'+id,user,this.httpOptions);
}
}
