import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material';
import { MatToolbarModule } from '@angular/material';

import {MatCardModule} from '@angular/material/card';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import {MatInputModule} from '@angular/material/input';
import {MatExpansionModule} from '@angular/material/expansion';// step 1 expansion



@NgModule({
  imports: [MatButtonModule,MatToolbarModule,MatCardModule,MatInputModule,MatExpansionModule],
  exports: [MatButtonModule,MatToolbarModule,MatCardModule,MatInputModule,MatExpansionModule],
})
export class MaterialModule { }