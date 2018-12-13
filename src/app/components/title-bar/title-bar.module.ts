import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleBarComponent } from './title-bar.component';
import { MatButtonModule } from '@angular/material';
import { AuthorService } from './author.service';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
  ],
  declarations: [TitleBarComponent],
  exports: [TitleBarComponent],
  providers: [
    AuthorService,
  ],
})
export class TitleBarModule { }
