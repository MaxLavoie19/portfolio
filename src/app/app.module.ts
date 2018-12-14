import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatIconModule } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TitleBarModule } from './components/title-bar/title-bar.module';
import { CardModule } from './components/card/card.module';
import { AStarModule } from './components/a-star/a-star.module';
import { ConfusionMatrixModule } from './components/confusion-matrix/confusion-matrix.module';

@NgModule({
   declarations: [
      AppComponent,
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      BrowserAnimationsModule,
      MatButtonModule,
      MatIconModule,
      TitleBarModule,
      AStarModule,
      ConfusionMatrixModule,
      CardModule,
   ],
   bootstrap: [
      AppComponent,
   ]
})
export class AppModule { }
