import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboardstat',
  templateUrl: './dashboardstat.component.html',
  styleUrls: ['./dashboardstat.component.css']
})
export class DashboardstatComponent implements OnInit {

  constructor(private http: HttpClient,private _router:Router ) { }
file={}
filescounter=""
filesize=""
diffdays=""
Boarddes=""
  ngOnInit(): void {
    this.http.get('http://localhost:3000/getfiles').subscribe(data=>{
    
      if(data['message']=="Please Join board in Dashboards"){
        alert(data['message'])
        this._router.navigate(["default/dash"]);
      }else{
        this.file=data;
    }
      })  
      this.http.get('http://localhost:3000/filesstat').subscribe(data=>{
        this.filescounter=data+"";
      
      })
      this.http.get('http://localhost:3000/filesize').subscribe(data=>{
        this.filesize=data+"";
      
      })
      this.http.get('http://localhost:3000/fileonlinetime').subscribe(data=>{
        this.diffdays=data+"";
      
      })
      this.http.get('http://localhost:3000/discription').subscribe(data=>{
        console.log(data);
        
       
      
      })
    



        }}    
      
     

      
         

  


