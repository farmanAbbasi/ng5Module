import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material';
import { MatToolbarModule } from '@angular/material';
import {MatCardModule} from '@angular/material/card';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';


@NgModule({
  imports: [MatButtonModule,MatToolbarModule,MatCardModule],
  exports: [MatButtonModule,MatToolbarModule,MatCardModule],
})
export class MaterialModule { }