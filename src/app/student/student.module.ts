import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentAddComponent } from './student-add/student-add.component';
import { ReactiveFormsModule } from '@angular/forms';
import { StudentCardComponent } from './student-card/student-card.component';

@NgModule({
  declarations: [
    StudentListComponent,
    StudentAddComponent,
    StudentCardComponent,
  ],
  imports: [
    CommonModule,
    StudentRoutingModule,
    ReactiveFormsModule
  ]
})
export class StudentModule { }
