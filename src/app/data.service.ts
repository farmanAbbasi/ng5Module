import { Injectable } from '@angular/core';
import { Observable } from'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { HttpBackend } from '@angular/common/http/src/backend';
import 'rxjs/add/operator/map';
import { idata } from './data';

@Injectable()
export class DataService {

  constructor(private http: HttpClient) { }
  getData()
  {
    return this.http.get('./assets/farman.json')
    .map(res =>{
      return res;
    })
  }

}
