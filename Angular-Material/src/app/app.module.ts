import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentsParentComponent } from './students-parent/students-parent.component';
import { StudnetChildComponent } from './students-parent/studnet-child/studnet-child.component';
import {MaterialModule} from './material/material.module';



@NgModule({
  declarations: [
    AppComponent,
    StudentsParentComponent,
    StudnetChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
