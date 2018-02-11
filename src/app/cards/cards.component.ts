import { Component} from '@angular/core';
import{HttpClient}from '@angular/common/http';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { DataService } from '../data.service';
import { exit } from 'process';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit{
  panelOpenState: boolean = false;//step 3 expansion
  alreadyLiked: boolean=false;
  toCommentValue: boolean=false;
  thought="";
  thoughtToShare=[];
  likeButton:string="likes";
  postButton:string="click to add comment";
  
  dataContent=[];
  found:boolean;
  toShare=false;
  shared=true;
  id:number=1;
  i:number;
  likesCount:number=0;
  j:number=0;
  jj:number=0;
  commentLength:number=0;
  value = 'Clear me';
  commentCount:number=0;
  text:string;

  constructor (private httpClient:HttpClient)//,private dataService : DataService
  {
    this.getProfile();
  } 

  ngOnInit()
  {
    //this.dataService.getData()
   // .subscribe((res :any)=>{
    //  this.dog=res.dogs;
   // });
  }
  deleteThought()
  {
      this.thought="";
     // this.shared=true;
  
  }
  addLikes()
  { 
    if(this.alreadyLiked==false)
    {
      this.likesCount=this.likesCount+1;
      this.alreadyLiked=true;
      this.jj=this.jj+1;
    }
    else{
      this.likesCount=this.likesCount-1;
      this.alreadyLiked=false;
    }
  }
  toComment()
    { 
      this.toCommentValue=true;
    }
    onCommentKeyUp(event :any)
    {
      this.text=event.target.value;
      this.commentLength=this.text.length;
      this.postButton="Post";
    }
     postComment()
      { 
        if(this.commentLength==0)
        {
          alert('zero length comment');
        }
        if(this.commentLength!=0)
        {
        
        this.commentCount++;
        this.commentLength=0;
        this.postButton="click to add comment"; 
        this.toCommentValue=false;
        }
     
        
        
    }
    
  onThoughtKeyUp(event :any)
  {
    this.thought=event.target.value;
  }
  shareThought()
  { 
      if(this.shared==true &&this.thought.length!=0)
      {
        this.toShare=true;
        if(this.toShare==true)
        {
          this.thoughtToShare[this.j]=this.thought;
          this.j=this.j+1;
          this.deleteThought();
         //this.toShare=true;
        }
        
      }
     
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
         this.dataContent[this.i]=data[this.i].body;//jsonholder se body ka content le rahe hai
         this.found=true;
         
       }
        
      }
     }
   )
  }
  
  dog=[
    
    {
      "name": "Person1",
      "desc":"good Person "
    },
    {
      "name": "Person2",
      "desc":"good Person "
    },
    {
      "name": "Person3",
      "desc":"good Person "
    },
    {
      "name": "Person4",
      "desc":"good Person "
    },
    {
      "name": "Person5",
      "desc":"good Person "
    },
    {
      "name": "Person6",
      "desc":"goodPerson "
    },
    {
      "name": "Person7",
      "desc":"good Person "
    },
    {
      "name": "Person8",
      "desc":"good Person "
    },
    {
      "name": "Person9",
      "desc":"good Person "
    },
    {
      "name": "Person10",
      "desc":"good Person "
    },
    {
      "name": "Person11",
      "desc":"good Person "
    },
    {
      "name": "Person12",
      "desc":"good Person "
    },
    {
      "name": "Person13",
      "desc":"good Person "
    },
    {
      "name": "Person14",
      "desc":"good Person"
    },
    {
      "name": "Person15",
      "desc":"good Person"
    },
    {
      "name": "Person16",
      "desc":"good Person "
    },
    {
      "name": "Person17",
      "desc":"good Person"},
    {
      "name": "Person18",
      "desc":"good Person"
    },
    {
      "name": "Person19",
      "desc":"good Person"
    },
    {
      "name": "Person20",
      "desc":"good Person"
    },
    {
      "name": "Person21",
      "desc":"good Person "
    },
    {
      "name": "Person22",
      "desc":"good Person "
    },
    {
      "name": "Person23",
      "desc":"good Person "
    },
    {
      "name": "Person24",
      "desc":"good Person "
    },
    {
      "name": "Person25",
      "desc":"good Person "
    },
    {
      "name": "Person26",
      "desc":"goodPerson "
    },
    {
      "name": "Person27",
      "desc":"good Person "
    },
    {
      "name": "Person28",
      "desc":"good Person "
    },
    {
      "name": "Person29",
      "desc":"good Person "
    },
    {
      "name": "Person30",
      "desc":"good Person "
    },
    {
      "name": "Person31",
      "desc":"good Person "
    },
    {
      "name": "Person32",
      "desc":"good Person "
    },
    {
      "name": "Person33",
      "desc":"good Person "
    },
    {
      "name": "Person34",
      "desc":"good Person"
    },
    {
      "name": "Person35",
      "desc":"good Person"
    },
    {
      "name": "Person36",
      "desc":"good Person "
    },
    {
      "name": "Person37",
      "desc":"good Person"},
    {
      "name": "Person38",
      "desc":"good Person"
    },
    {
      "name": "Person39",
      "desc":"good Person"
    },
    {
      "name": "Person40",
      "desc":"good Person"
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

