import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import{HttpClientModule} from '@angular/common/http';
import { CardsComponent } from './cards/cards.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';



@NgModule({
  declarations: [
    AppComponent,
    CardsComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    InfiniteScrollModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
