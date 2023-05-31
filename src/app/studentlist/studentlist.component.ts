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
  Student:Student;
  studentModalTitle:string='';
  ActiveAddOrEditComp:boolean=false;
  deleteStudentId :Number = 0;
  constructor(private _http:HttpClient,private _service:StudentService,private _token:TokenService,private _fb:FormBuilder) {    
    this.getStudentData();
    this.Student = new Student();
  }
  addNewStudent(){
    this.studentModalTitle = "Add Student";
    this.Student.studentID = 0;
    this.Student.studentName = '';
    this.Student.course = '';
    this.Student.specialization = '';
    this.Student.departmentID = 0;
    this.Student.percentage = 0;
    this.ActiveAddOrEditComp = true;
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

  editStudent(stu:Student){
    console.log(stu);
    this.studentModalTitle = "Edit Student";
    this.Student = stu;
    this.ActiveAddOrEditComp = true;
  }

  studentModalClosed(){
    this.ActiveAddOrEditComp = false;
  }

  deleteStudent(deptId:Number){
    this.deleteStudentId = deptId;
  }

  confirmDeleteStudent(){
    if(this.deleteStudentId > 0){
      this._service.deleteStudent(this.deleteStudentId).subscribe((responce)=>{
        this.getStudentData();
        alert('Student removed Successfully');
      });
    }
  }

}
