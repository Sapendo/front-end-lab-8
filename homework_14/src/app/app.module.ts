import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { ClassComponent } from './class/class.component';
import { AcademicSubjectService } from './academic-subject.service';

@NgModule({
  declarations: [
    AppComponent,
    ScheduleComponent,
    ClassComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [AcademicSubjectService],
  bootstrap: [AppComponent]
})
export class AppModule { }
