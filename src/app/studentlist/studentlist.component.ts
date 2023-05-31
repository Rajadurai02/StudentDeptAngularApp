import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Student } from '../Models/Student';
import { StudentService } from '../student.service';
import { TokenService } from '../token.service';

@Component({
  selector: 'app-studentlist',
  templateUrl: './studentlist.component.html',
  styleUrls: ['./studentlist.component.css']
})
export class StudentlistComponent {
  studentList:Student[]=[];
  serverError:boolean=false;
  serverErrorMsg:string='';
  constructor(private _http:HttpClient,private _service:StudentService,private _token:TokenService,private _fb:FormBuilder) {    
    this.getStudentData();
  }
  addNewStudent(){
    
  }
  getStudentData(){
    this._service.getStudents().subscribe((responce)=>{
      this.studentList = responce as Student[];
    },
    (error: Response) => {
      this.serverError = true; 
      if(error.status === 401){
        this.serverErrorMsg = "Unauthorized please Login";
      }
      else{
        this.serverErrorMsg = "Server Error";
      }
      
  });
  }
}
