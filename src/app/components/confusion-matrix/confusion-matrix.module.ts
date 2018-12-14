import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfusionMatrixComponent } from './confusion-matrix.component';
import { DxDataGridModule } from 'devextreme-angular';

@NgModule({
  imports: [
    CommonModule,
    DxDataGridModule,
  ],
  declarations: [ConfusionMatrixComponent],
  bootstrap: [
    ConfusionMatrixComponent,
  ],
})
export class ConfusionMatrixModule { }
