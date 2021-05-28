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
import $ from "jquery";
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private http: HttpClient ,private _router:Router, private _activatedRoute:ActivatedRoute) { }
  joinedboards={}
dashboard={};
message="5araaaa";
value=[]
x = {}
  ngOnInit(): void {
  
   this.http.get('http://localhost:3000/users/dashboardinfo').subscribe(data=>{

  this.dashboard=data;

    })
  }

  openForm() {
    document.getElementById("myForm").style.display = "block";
  }
closeForm() {
    document.getElementById("myForm").style.display = "none";
  }
  

adddash(){
  document.getElementById('id01').style.display='block'
this.x = (Math.floor(Math.random() * 1000000000)).toString();
}
  

joinexistingdash(data){
 

 this.http.post('http://localhost:3000/addexistingdash', data).subscribe(data=>{
alert(data['message'])
this.joinedboards=data;
 })
  
}

adddashb(data){
  var psw = (<HTMLInputElement>document.getElementById("password")).value;
  var ycpsw= (<HTMLInputElement>document.getElementById("passwordconfirm")).value;
 if(psw!==ycpsw){
  alert("password must match")
   return
   ;}

   else{
 
  this.dashboard = data;
  console.log(this.dashboard);
  this.callServer();

   }
}

joindash(event){
  var target = event.target || event.srcElement || event.currentTarget;
  var idAttr = target.attributes.id;
  this.value.push(idAttr.nodeValue);

 this.http.post('http://localhost:3000/users/joinowndash', this.value).subscribe(data =>{
 })
  this.value.pop()

  this._router.navigate(["default/dashstat"]);
   
   
}
deletedash(event){

  var target = event.target || event.srcElement || event.currentTarget;
  var idAttr = target.attributes.id;
  this.value.push(idAttr.nodeValue);
  let isBoss = confirm("All data will be lost after deleting a dash !");
  if( isBoss == true){
  this.http.post('http://localhost:3000/users/deletdash',this.value).subscribe(data=>{
 
  })  
   this.value.pop()
   this.ngOnInit();
   this.ngOnInit();}
   else{
    
   }
}
callServer() {
  this.http.post('http://localhost:3000/users/dashboard', this.dashboard)
  .subscribe(data => {
      alert(data['message'])
  if(data['message']=="Dashboard created"){  
    document.getElementById('id01').style.display='none'
    this.ngOnInit();
  }
  });
}
}
