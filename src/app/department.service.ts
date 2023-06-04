import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Department } from './Models/Department';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  private getDepartmentUrl = "http://localhost:57330/api/Department";

  constructor(private _http: HttpClient,private _token:TokenService) { }

  private headers_object = new HttpHeaders().set("Authorization", "Bearer " + this._token.LoggedInUser.jwtToken);

  private httpOptions = {
    headers: this.headers_object
  };

  getDepartments(): Observable<Department[]> {
    return this._http.get<Department[]>(this.getDepartmentUrl,this.httpOptions);
  }

  getDepartmentById(id: Number): Observable<Department> {
    return this._http.get<Department>(this.getDepartmentUrl + "/" + id);
  }

  addDepartment(Department: Department): Observable<Department> {
    return this._http.post<Department>(this.getDepartmentUrl, Department);
  }

  editDepartment(Department: Department): Observable<Department> {
    return this._http.put<Department>(this.getDepartmentUrl, Department);
  }

  deleteDepartment(id: Number): Observable<Department> {
    return this._http.delete<Department>(this.getDepartmentUrl + "/" + id);
  }
}
