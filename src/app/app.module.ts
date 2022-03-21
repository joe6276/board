import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { StudentComponent } from './student/student.component';
import { TeacherComponent } from './teacher/teacher.component';
import { DisciplinaryComponent } from './disciplinary/disciplinary.component';
import { ScholarserVice } from './Services/scholar.services';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AddStudentComponent,
    StudentComponent,
    TeacherComponent,
    DisciplinaryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ScholarserVice],
  bootstrap: [AppComponent]
})
export class AppModule { }
