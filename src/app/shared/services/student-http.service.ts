import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Student } from '../interfaces/student.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StudentHttpService {
  url = environment.apiUrl;
  constructor(private http: HttpClient) { }

  getStudentList(): Promise<Student[]> {
    return this.http.get<Student[]>(`${this.url}/students`).toPromise();
  }
  getStudentById(id: number): Promise<Student> {
    return this.http.get<Student>(`${this.url}/students/${id}`).toPromise();
  }
  deleteStudentById(id: number): Promise<Student> {
    return this.http.delete<Student>(`${this.url}/students/${id}`).toPromise();
  }
  postStudent(student: Student): Promise<Student> {
    return this.http.post<Student>(`${this.url}/students`, student).toPromise();
  }
  putStudent(id: number, student: Student): Promise<Student> {
    return this.http.put<Student>(`${this.url}/students/${id}`, student).toPromise();
  }
}
