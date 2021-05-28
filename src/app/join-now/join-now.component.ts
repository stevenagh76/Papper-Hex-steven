import {
  Component
} from '@angular/core';
import {
  from
} from 'rxjs';
import {
  FormControl,
  FormGroup
} from '@angular/forms';
import {
HttpClient,
  HttpHeaders} from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedService } from "../shared/shared.service"
@Component({
  selector: 'app-join-now',
  templateUrl: './join-now.component.html',
  styleUrls: ['./join-now.component.css']
}) 
export class JoinNowComponent {
 user = [];
  constructor(private http: HttpClient ,private _router:Router, private _activatedRoute:ActivatedRoute, private shared:SharedService){}
  message:string;


   
  

  onSubmit(data) {
    
    var x = (<HTMLInputElement>document.getElementById("password")).value;
    var y = (<HTMLInputElement>document.getElementById("passwordconfirm")).value;
   if(x!==y){
    document.getElementById("psscheck").innerHTML = "Password don't match !"
     var a = document.getElementById("psscheck");
     a.style.display ="block";
     return;}

     else{
   
    this.user = data;

    this.callServer();
     

    
     
   }
  }

  myFunction() {
    var x = document.getElementById("registerform");
    document.getElementById("aswhat").innerHTML = " Sign in as Board Leader!!"
    x.style.display = "block";
    x.scrollIntoView();
  }

  
  myFunctions() {
    var x = document.getElementById("registerform");
    document.getElementById("aswhat").innerHTML = " Sign in as Board Member!!"
    x.style.display = "block";
    x.scrollIntoView();
  }


  callServer() {
    this.http.post('http://localhost:3000/users', this.user)
    .subscribe(data => {
 
      if(data['message']=="User registerd"){
        alert(data['message'])
    
         this._router.navigate(["/default"],{relativeTo: this._activatedRoute});
      }else{
      alert(data['message']);
      
      };
    });
}
}