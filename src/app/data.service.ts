import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';//step 4
import{idata} from "./data";//step 5.b
//step 5.a   created data.ts in app folder
import {Observable} from 'rxjs/Observable';//step 5.c
@Injectable()
export class DataService {
   private _url:string="farman.json";//step 7
  constructor(private http:HttpClient) { }//step 6
  getData() :Observable<idata[]>//step 8.b   done in this file now move to cards.comp.ts
  { 
     return this.http.get<idata[]>(this._url);
     ;//step 8.a
  }

}
