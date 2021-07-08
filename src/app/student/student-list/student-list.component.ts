import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/shared/interfaces/student.interface';
import { StudentHttpService } from 'src/app/shared/services/student-http.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  studentList: Student[] = [];
  constructor(private httpService: StudentHttpService) { }

  ngOnInit(): void {
    this.getStudents();
  }

  async getStudents() {
    try {
      this.studentList = await this.httpService.getStudentList();
    } catch (error) {
      console.error(error);
    }
  }
}
