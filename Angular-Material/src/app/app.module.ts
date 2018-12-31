import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentsParentComponent } from './students-parent/students-parent.component';
import { StudnetChildComponent } from './students-parent/studnet-child/studnet-child.component';
import {MaterialModule} from './material/material.module';
import{StudentService} from './shared/student.service';
import {ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 




@NgModule({
  declarations: [
    AppComponent,
    StudentsParentComponent,
    StudnetChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [StudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
