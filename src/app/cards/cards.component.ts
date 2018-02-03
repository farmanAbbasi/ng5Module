import { Component, OnInit } from '@angular/core';
import{HttpClient}from '@angular/common/http';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  dataContent=[];
  nameContent=[];
  found:boolean;
  found2:boolean;
  id:number=1;
  i:number;

  ngOnInit() {
  }
  
  constructor (private httpClient:HttpClient)
  {
    this.getProfile();
    //this.getName();
  } 
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
  //pagiantion step 3
  /* private noOfItemsToShowInitially: number = 10;
  private itemsToLoad: number = 5;

  public itemsToShow = this.dataContent.slice(0, this.noOfItemsToShowInitially);
  public isFullListDisplayed: boolean = false;
  onScroll() {

    if (this.noOfItemsToShowInitially <= this.dataContent.length) {

      this.noOfItemsToShowInitially += this.itemsToLoad;

      this.itemsToShow = this.dataContent.slice(0, this.noOfItemsToShowInitially);

      console.log("scrolled");

    } else {

      this.isFullListDisplayed = true;

    }

  }
*/ 
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

