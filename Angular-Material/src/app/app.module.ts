import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentsParentComponent } from './students-parent/students-parent.component';
import { StudnetChildComponent } from './students-parent/studnet-child/studnet-child.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentsParentComponent,
    StudnetChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
