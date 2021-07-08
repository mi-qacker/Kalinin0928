import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Student } from 'src/app/shared/interfaces/student.interface';
import { StudentHttpService } from 'src/app/shared/services/student-http.service';

@Component({
  selector: 'app-student-add',
  templateUrl: './student-add.component.html',
  styleUrls: ['./student-add.component.css']
})
export class StudentAddComponent implements OnInit {
  formStudent!: FormGroup;
  constructor(private fb: FormBuilder, private httpService: StudentHttpService, private router: Router) { }

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
    })
  }
  async onAddStudent() {
    try {
      let student: Student = this.formStudent.value;
      student.specialization = student.specialization.toUpperCase();
      await this.httpService.postStudent(student);
      this.router.navigateByUrl('student');
    } catch (error) {
      console.error(error);
    }
  }
}
