import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Student } from './Models/Student';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private getStudentUrl = "http://localhost:57330/api/Student";

  constructor(private _http: HttpClient,private _token:TokenService) { }

  private headers_object = new HttpHeaders().set("Authorization", "Bearer " + this._token.LoggedInUser.JwtToken);

  private httpOptions = {
    headers: this.headers_object
  };

  getStudents(): Observable<Student[]> {
    return this._http.get<Student[]>(this.getStudentUrl,this.httpOptions);
  }

  getStudentById(id: Number): Observable<Student> {
    return this._http.get<Student>(this.getStudentUrl + "/" + id);
  }

  addStudent(student: Student): Observable<Student> {
    return this._http.post<Student>(this.getStudentUrl, student);
  }

  editStudent(student: Student): Observable<Student> {
    return this._http.put<Student>(this.getStudentUrl, student);
  }

  deleteStudent(id: Number): Observable<Student> {
    return this._http.delete<Student>(this.getStudentUrl + "/" + id);
  }
}
