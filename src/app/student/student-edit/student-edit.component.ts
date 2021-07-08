import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from 'src/app/shared/interfaces/student.interface';
import { StudentHttpService } from 'src/app/shared/services/student-http.service';

@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styleUrls: ['./student-edit.component.css']
})
export class StudentEditComponent implements OnInit {
  id: number = 0;
  student!: Student;
  formStudent!: FormGroup;
  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private httpService: StudentHttpService,
    private router: Router) {
    this.route.params.subscribe(param => {
      this.id = param.id;
    });
  }

  ngOnInit(): void {
    this.formStudent = this.fb.group({
      surname: [null, [Validators.required, Validators.maxLength(30)]],
      name: [null, [Validators.required, Validators.maxLength(30)]],
      patronymic: [null, [Validators.maxLength(30)]],
      phone: [null, [Validators.required, Validators.pattern(/\+7[0-9]{10}/g)]],
      email: [null, [Validators.required, Validators.email]],
      dateBirth: [null, [Validators.required]],
      group: [null, [Validators.required, Validators.pattern(/\d{3}\-\d{3}/g)]],
      specialization: [null, [Validators.required, Validators.maxLength(50)]],
    });
    this.getStudent();
  }

  async getStudent() {
    try {
      this.student = await this.httpService.getStudentById(this.id);
      delete this.student.id;
      this.formStudent.setValue(this.student);
    } catch (error) {
      console.error(error);
    }
  }

  async onEditStudent() {
    try {
      let student: Student = this.formStudent.value;
      student.specialization = student.specialization.toUpperCase();
      await this.httpService.putStudent(this.id, student);
      this.router.navigateByUrl('student');
    } catch (error) {
      console.error(error);
    }
  }
}
