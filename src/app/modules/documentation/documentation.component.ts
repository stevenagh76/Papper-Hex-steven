  
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import * as $ from "jquery"
@Component({
  selector: 'app-documentation',
  templateUrl: './documentation.component.html',
  styleUrls: ['./documentation.component.css']
})
export class DocumentationComponent implements OnInit {
pdf={}
file={}
folder={}
 input =""
  images;
  multipleImages = [];
  
  constructor(private http: HttpClient,private _router:Router){}

  ngOnInit(){
    this.http.get('http://localhost:3000/getfiles').subscribe(data=>{
            
      if(data['message']=="Please Join board in Dashboards"){
      alert(data['message'])
        this._router.navigate(["default/dash"]);
      }else{
        this.file=data;
    
       
        
    }
  })

  this.http.get('http://localhost:3000/getfolders').subscribe(data=>{
    
        this.folder=data;
    
       
        
    })
  
  }

  selectImage(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.images = file;
   
    }
  }

  selectMultipleImage(event){
    if (event.target.files.length > 0) {
      this.multipleImages = event.target.files;
    }
  }
 
popadd(event){

  var target = event.target || event.srcElement || event.currentTarget;
  var idAttr = target.attributes.id;
const value = idAttr.nodeValue
console.log(value);

if(value==="asdd"){
  document.getElementById("container").style.display='block';
  document.getElementById("elements").style.display='block';

}
if(value==="mult"){
  document.getElementById("container").style.display='block';
  document.getElementById("elementsm").style.display='block';

}
if(value=="folder"){
  document.getElementById("container").style.display='block';
  document.getElementById("elementsf").style.display='block';
}
}


close(){
  document.getElementById("container").style.display='none';
  document.getElementById("elementsf").style.display='none';
  document.getElementById("elementsm").style.display='none';
  document.getElementById("elements").style.display='none';
}

  onSubmit(){
    const formData = new FormData();
    formData.append('file', this.images);

    this.http.post<any>('http://localhost:3000/file', formData).subscribe(
      (res) => console.log(res),
     (err) => console.log(err),
      
    );
    this.ngOnInit();
     this.ngOnInit();
  }

  Createfolder(data){
  
console.log(data);

  
    this.http.post('http://localhost:3000/createFolder',data).subscribe(


    );

  }


  addHero(newHero: string) {
    
    if(!newHero || newHero == undefined ||newHero == "" || newHero.length == 0){
     this.ngOnInit();
    }
else{
    var pdf =[]
    var result = [];
   

    for(var i in this.file)
    result.push([i, this.file [i]]);


    for( var y= 0 ; y<result.length ; y++ ){

     if(this.file[y].Originalname.includes(newHero+"")){

      pdf.push(this.file[y]);

       
     }   

    }
       this.file =pdf
      console.log(this.file);
    }
  }


  deletFile(){

this.http.get('http://localhost:3000/users/deleteFile').subscribe(data=>{

  alert(data['message']);


});


  }

  onMultipleSubmit(){
    const formData = new FormData();
    for(let img of this.multipleImages){
      formData.append('files', img);
    }

    this.http.post<any>('http://localhost:3000/multipleFiles', formData).subscribe(
      (res) => console.log(res),
      (err) => console.log(err)
    );
  }
  closed(){var modal = document.getElementById("myModal");  
    modal.style.display = "none";
  }
value=[]
  openfile(event){

    var modal = document.getElementById("myModal");
    var btn = document.getElementById("myBtn");
    var span = document.getElementsByClassName("close")[0];
      modal.style.display = "block";
      
      var target = event.target || event.srcElement || event.currentTarget;
      var idAttr = target.attributes.id;
      this.value.push(idAttr.nodeValue);
   
      
    this.http.post('http://localhost:3000/openfile',this.value).subscribe(data=>{
      console.log(data);
    }


    )

this.value.pop();
  }
  preformocr(){
    document.getElementById("body").style.display="none" 
     document.getElementById("loading").style.display="block"
    this.http.get('http://localhost:3000/preformocr').subscribe(data=>{
      document.getElementById("loading").style.display="none"
   document.getElementById("pdf").style.display="block"
    this.pdf=data;
  
    })


  }
  Download(){


  }

  goback(){
    document.getElementById("body").style.display="block";
    document.getElementById("pdf").style.display="none"
    document.getElementById("myModal").style.display="none"
  }




  gotoViewport(){
    this._router.navigate(["default/View"]);
  }





}
