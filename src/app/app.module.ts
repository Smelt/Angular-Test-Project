import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import {MdCardModule, MdTabsModule, MdInputModule, MdButtonModule} from '@angular/material';

import { CreateComponent } from './create/create.component';
import 'hammerjs';
import { AnalyzeComponent } from './analyze/analyze.component';


@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    AnalyzeComponent,
  

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    MdCardModule,
    MdTabsModule,
    MdInputModule,
      MdButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
