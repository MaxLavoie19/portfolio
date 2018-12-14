import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatIconModule } from '@angular/material';

import { DxButtonModule } from 'devextreme-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TitleBarModule } from './components/title-bar/title-bar.module';
import { CardModule } from './components/card/card.module';
import { AStarModule } from './components/a-star/a-star.module';

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
      DxButtonModule,
      TitleBarModule,
      AStarModule,
      CardModule,
   ],
   bootstrap: [
      AppComponent,
   ]
})
export class AppModule { }
