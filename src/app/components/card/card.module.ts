import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card.component';
import { MatCardModule, MatButtonModule } from '@angular/material';
import { ProjectDirective } from './project.directive';


@NgModule({
   imports: [
      CommonModule,
      MatCardModule,
      MatButtonModule,
   ],
   declarations: [
      CardComponent,
      ProjectDirective,
   ],
   exports: [
      CardComponent
   ],
   providers: []
})
export class CardModule { }
