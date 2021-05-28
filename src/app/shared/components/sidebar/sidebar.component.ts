import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private _router:Router, private http: HttpClient,private _activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
  }
  logout(){
    this.http.get('http://localhost:3000/logout').subscribe(data=>{
 
  })
  this._router.navigate([""]);
  }
  help(){
    document.getElementById('id04').style.display='block'

  }
  Setting(){
    document.getElementById('id05').style.display='block'
  }
}
