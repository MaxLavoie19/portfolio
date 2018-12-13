import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatIconModule } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TitleBarModule } from './components/title-bar/title-bar.module';
import { CardModule } from './components/card/card.module';
import { AStarComponent } from './components/a-star/a-star.component';

@NgModule({
   declarations: [
      AppComponent,
      AStarComponent,
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      BrowserAnimationsModule,
      MatButtonModule,
      MatIconModule,
      TitleBarModule,
      CardModule
   ],
   bootstrap: [
      AppComponent,
      AStarComponent,
   ]
})
export class AppModule { }
