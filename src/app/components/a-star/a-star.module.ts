import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AStarComponent } from './a-star.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AStarComponent],
  bootstrap: [
    AStarComponent,
  ],
})
export class AStarModule { }
