import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WorkExpCompComponent } from './comp/work-exp-comp/work-exp-comp.component';
import { EducationComponent } from './comp/education/education.component';

@NgModule({
  declarations: [
    AppComponent,
    WorkExpCompComponent,
    EducationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
