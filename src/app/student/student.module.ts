import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentAddComponent } from './student-add/student-add.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StudentCardComponent } from './student-card/student-card.component';
import { StudentEditComponent } from './student-edit/student-edit.component';
import { FilterPipe } from './filter.pipe';

@NgModule({
  declarations: [
    StudentListComponent,
    StudentAddComponent,
    StudentCardComponent,
    StudentEditComponent,
    FilterPipe,
  ],
  imports: [
    CommonModule,
    StudentRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class StudentModule { }
