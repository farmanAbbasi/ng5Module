import { Component } from '@angular/core';
import{HttpClient}from '@angular/common/http';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app';
  dataContent=[];
  nameContent=[];
  found:boolean;
  found2:boolean;
  id:number=1;
  dog=[
    
    {
      "name": "dog1"
    },
    {
      "name": "dog2"
    },
    {
      "name": "dog3"
    },
    {
      "name": "dog4"
    },
    {
      "name": "dog5"
    },
    {
      "name": "dog6"
    },
    {
      "name": "dog7"
    },
    {
      "name": "dog8"
    },
    {
      "name": "dog9"
    },
    {
      "name": "dog10"
    }

  ];
  
     

  constructor (private httpClient:HttpClient)
  {
    this.getProfile();
    //this.getName();
  } 

  i:number;

  getProfile()
  {
   console.log(this.id);
   this.httpClient.get(`https://jsonplaceholder.typicode.com/posts/?Id=${this.id}`)//note `` not ''
   .subscribe(
     (data:any[])=>{
      console.log(data);
      if(data.length)
      {
       // this.dataContent=data[0].title;
       // this.found=true;
       for(this.i=0;this.i<data.length;this.i++)
       {
         this.dataContent[this.i]=data[this.i].title;
         this.found=true;
         
       }
        
      }
     }
   )
  }

  
  /*getName()
  {
   console.log(this.id);
   this.httpClient.get(`../assets/farman.json`)//note `` not ''
   .subscribe(
     (dataName:any[])=>{
      
      if(dataName.length)
      {
       
       for(this.i=0;this.i<dataName.length;this.i++)
       {
         this.nameContent[this.i]=dataName[this.i].name;//last wala name json se hai
         this.found2=true;
         
       }
        
      }
     }
   )
  }*/
  ////////////////////////////////////////////////////////////////////////////////////
  
}
