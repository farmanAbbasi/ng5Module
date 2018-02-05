import { Component} from '@angular/core';
import{HttpClient}from '@angular/common/http';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { DataService } from '../data.service';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';



@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit{
  dataContent=[];
  found:boolean;
  //found2:boolean;
  id:number=1;
  i:number;

  
  constructor (private httpClient:HttpClient)//step 9 : private _dataService:DataService
  {
    this.getProfile();
  } 

  ngOnInit()//step  10 inside this do all
  {
    //this._dataService.getData()//this method returnsobsrevable so have to subscribe
    // .subscribe(resData=>this.dog=resData);//step 10 complete
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
  
   dog=[
    
    {
      "name": "dog1",
      "desc":"good dog "
    },
    {
      "name": "dog2",
      "desc":"good dog "
    },
    {
      "name": "dog3",
      "desc":"good dog "
    },
    {
      "name": "dog4",
      "desc":"good dog "
    },
    {
      "name": "dog5",
      "desc":"good dog "
    },
    {
      "name": "dog6",
      "desc":"good dog "
    },
    {
      "name": "dog7",
      "desc":"good dog "
    },
    {
      "name": "dog8",
      "desc":"good dog "
    },
    {
      "name": "dog9",
      "desc":"good dog "
    },
    {
      "name": "dog10",
      "desc":"good dog "
    },
    {
      "name": "dog11",
      "desc":"good dog "
    },
    {
      "name": "dog12",
      "desc":"good dog "
    },
    {
      "name": "dog13",
      "desc":"good dog "
    },
    {
      "name": "dog14",
      "desc":"good dog "
    },
    {
      "name": "dog15",
      "desc":"good dog "
    },
    {
      "name": "dog16",
      "desc":"good dog "
    },
    {
      "name": "dog17",
      "desc":"good dog "
    },
    {
      "name": "dog18",
      "desc":"good dog "
    },
    {
      "name": "dog19",
      "desc":"good dog "
    },
    {
      "name": "dog20",
      "desc":"good dog "
    },  {
      "name": "dog21",
      "desc":"good dog "
    },
    {
      "name": "dog22",
      "desc":"good dog "
    },
    {
      "name": "dog23",
      "desc":"good dog "
    },
    {
      "name": "dog24",
      "desc":"good dog "
    },
    {
      "name": "dog25",
      "desc":"good dog "
    },
    {
      "name": "dog26",
      "desc":"good dog "
    },
    {
      "name": "dog27",
      "desc":"good dog "
    },
    {
      "name": "dog28",
      "desc":"good dog "
    },
    {
      "name": "dog29",
      "desc":"good dog "
    },
    {
      "name": "dog30",
      "desc":"good dog "},
    {
      "name": "dog31",
      "desc":"good dog "
    },
    {
      "name": "dog32",
      "desc":"good dog "
    },
    {
      "name": "dog33",
      "desc":"good dog "
    },
    {
      "name": "dog34",
      "desc":"good dog "
    },
    {
      "name": "dog35",
      "desc":"good dog "
    },
    {
      "name": "dog36",
      "desc":"good dog "
    },
    {
      "name": "dog37",
      "desc":"good dog "
    },
    {
      "name": "dog38",
      "desc":"good dog "
    },
    {
      "name": "dog39",
      "desc":"good dog "
    },
    {
      "name": "dog40",
      "desc":"good dog "
    }

  ];
  
  private noOfItemsToShowInitially: number = 1;

  private itemsToLoad: number = 5;

  public itemsToShow = this.dog.slice(0, this.noOfItemsToShowInitially);

  public isFullListDisplayed: boolean = false;

  onScroll() {

    if (this.noOfItemsToShowInitially <= this.dog.length) {

      this.noOfItemsToShowInitially += this.itemsToLoad;

      this.itemsToShow = this.dog.slice(0, this.noOfItemsToShowInitially);

      console.log("scrolled");

    } else {

      this.isFullListDisplayed = true;

    }

  }
  

  
}

