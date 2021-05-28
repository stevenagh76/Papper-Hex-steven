import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient,HttpHeaders} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class SharedService {
useremail=[]

  message:string;
  constructor(private http: HttpClient) { }
usercall(): Observable<any>{
  return this.http.get('http://localhost:3000/users/info')
  
};





}
