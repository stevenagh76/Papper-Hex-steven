import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
  


@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.css']
})
export class DefaultComponent implements OnInit {

  constructor(private _router:Router,private http: HttpClient, private _activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this._router.navigate(["dash"],{relativeTo: this._activatedRoute});

  
        
    
 
  }

}
