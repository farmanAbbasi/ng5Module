import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';

import {MatInputModule} from '@angular/material/input';//for the input
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import{HttpClientModule} from '@angular/common/http';
import{FormsModule} from '@angular/forms';

import { CardsComponent } from './cards/cards.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { DataService } from './data.service';




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
    InfiniteScrollModule,FormsModule
  
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
