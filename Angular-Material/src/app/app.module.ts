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
import{AngularFireModule} from 'angularfire2';
import{AngularFireDatabaseModule} from 'angularfire2/database';
import{environment} from  '../environments/environment';
import{DepartmentService} from '../app/shared/department.service';
import { StudentListComponent } from './students-parent/student-list/student-list.component';





@NgModule({
  declarations: [
    AppComponent,
    StudentsParentComponent,
    StudnetChildComponent,
    StudentListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebaseConfig)  
  ],
  providers: [StudentService,DepartmentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
