import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import PSPDFKit from 'pspdfkit';


@Component({
  selector: 'app-viewport',
  templateUrl: './viewport.component.html',
  styleUrls: ['./viewport.component.css']
})
export class ViewportComponent implements OnInit{
 title = 'angularpdf';
constructor(private http: HttpClient,private _router:Router){}
 file;

ngOnInit(): void {
 





  //     this.http.get('http://localhost:3000/openfile').subscribe(data=>{
              
  // console.log(data);
  
      
  //   })
    


    PSPDFKit.load({
      baseUrl: location.protocol + "//" + location.host + "/assets/",
      document: '../assets/Status Report - 7.pdf',
      container: '#app',
      licenseKey: 'NbTWIJWm9VCGduT7QGpRLWXABwJobnAeY6ln9siXAaeq-ptyw8DmJzhMD7QZrg7SuL_fLDCYbTiOUiYqsDKWFi8m6WrSQOdS6iIb8HHicFE2Hi4nTK77NdGnFKcSeS4eO5f8eAJ_NpUxIaFVyz7F5RZlS3Et2cgnH_BfoB8SjKwVB4z2O3nfzzVBqehXwOeueYNt5kBPEptQelA0As5y7J1r0qy5qvWSrlAs8OtG1NItNDEQkXLGgapS_NOrvW9oAErYuL6OYNub83RK7LqIYnmwE3z6jyFkHsy-kKIcNccL3ZvaWkFF5xceiBHiQK0hKSfV5aisHmbnNhYbDQNdvA_TaEywlfdga4q0BpNEAQGPL33gj1RmOGwW-iFoXQBPY26RUgKNLn_bYkybVd2yvmXTP0uVjGw9sJFi3ObO-klGBkPPuKK4EmMwAsFoQ7FnkgIm8KCANjIQDBBlYqRoig==',
    }).then((instance)=>{

      (window as any).instance = instance;
    });

  }
}
