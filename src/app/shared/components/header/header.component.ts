import {
  Component, OnInit
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
import { createElement } from 'highcharts';
import { SharedService } from '../../shared.service';
import { FormsModule }   from '@angular/forms'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

user_name =[]
board_name={}
  constructor(private http: HttpClient ,private _router:Router, private _activatedRoute:ActivatedRoute,private shared:SharedService) {}

  ngOnInit(): void {

this.shared.usercall().subscribe(data =>{
  this.user_name = data;
})

this.http.get('http://localhost:3000/users/joinowndash').subscribe(data =>{
  this.board_name = data;
})
this.http.get('http://localhost:3000/users/userinformation').subscribe(data=>{


  if(data['message']=="true")
  {
    document.getElementById("addbutton").style.pointerEvents='none';
    document.getElementById("validated").style.display='none';
    document.getElementById("validated2").style.display='block';
   
  }
    
})

  }
 
addainfo(){
  document.getElementById('id09').style.display='block'
}
changepass(){
document.getElementById('id03').style.display='block'


}
pass(data){
  var x = (<HTMLInputElement>document.getElementById("newpasse")).value;
    var y = (<HTMLInputElement>document.getElementById("confirmnewpss")).value;
    if(x!==y){
   alert("password don't match");
      }
  
else{
  console.log(data);
  
  this.http.post('http://localhost:3000/users/changepass',data).subscribe(data =>{  
     alert(data['message']);
  })  
  document.getElementById('id03').style.display='none';
}
}





add(data){
  this.http.post('http://localhost:3000/users/userinformation',data).subscribe(data =>{
 
  })
  document.getElementById('id09').style.display='none'
  this.ngOnInit();

}







}
