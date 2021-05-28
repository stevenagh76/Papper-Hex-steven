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

} from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent  {
 userauth=[]
  constructor(private http: HttpClient,private _router:Router, private _activatedRoute:ActivatedRoute) {}

  scrolltoview(){
    const x = document.getElementById("Dev");
    x.scrollIntoView({behavior: 'smooth', block: 'center'});
  }




onSubmit(data){

    this.userauth = data;

   this.http.post("http://localhost:3000/users/login",data)
   .subscribe(data => {
 
    if(data['message']=="Login fine"){
      alert(data['message'])
       this._router.navigate(["/default"],{relativeTo: this._activatedRoute});
    }else{
    alert(data['message']);
    
    };
  });
}

reporterror(){

 
var error = (<HTMLInputElement>document.getElementById("form5Example2")).value;
this.http.post("http://localhost:3000/report",error).subscribe(data =>{




})




}







  }  





  



