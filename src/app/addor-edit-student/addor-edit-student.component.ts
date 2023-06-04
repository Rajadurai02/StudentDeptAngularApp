import { Component, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DepartmentService } from '../department.service';
import { Department } from '../Models/Department';
import { Student } from '../Models/Student';
import { StudentService } from '../student.service';
import { StudentlistComponent } from '../studentlist/studentlist.component';

@Component({
  selector: 'app-addor-edit-student',
  templateUrl: './addor-edit-student.component.html',
  styleUrls: ['./addor-edit-student.component.css']
})
export class AddorEditStudentComponent {
  @Input() public Student:any
  student: Student;
  departmentList:Department[]=[];
  constructor(private _service:StudentService,private _fb:FormBuilder,private _parent:StudentlistComponent,private _deptService:DepartmentService) {
    this.student = new Student();
  }

  ngOnInit(): void {
    this.student = this.Student;
    this.getDepartmentList();
  }

  get StudentName(){
    return this.StudentForm.get('StudentName');
  }

  get Course(){
    return this.StudentForm.get('Course');
  }

  get Specialization(){
    return this.StudentForm.get('Specialization');
  }

  get Percentage(){
    return this.StudentForm.get('Percentage');
  }

  get DepartmentID(){
    return this.StudentForm.get('DepartmentID');
  }

  StudentForm = this._fb.group({
    StudentName: ['',[Validators.required]],
    Course:['',[Validators.required]],
    Specialization:['',[Validators.required]],
    Percentage:['',[Validators.required]],
    DepartmentID:['',[Validators.required]]
  })

  addOrEditStudent(){
    if(this.student.studentID > 0){
      this.EditStudent();
    }
    else{
      this.AddStudent();
    }
  }

  EditStudent(){
    this._service.editStudent(this.student).subscribe((data)=>{
      alert("Saved Successfully");
      this._parent.getStudentData();
    },
    (error: Response) => { 
      alert("Error Happened");  
    });
  }

  AddStudent(){
    this._service.addStudent(this.student).subscribe((data)=>{
      alert("Saved Successfully");
      this._parent.getStudentData();
    },
    (error: Response) => { 
      alert("Error Happened");  
    });
  }

  getDepartmentList(){
    this._deptService.getDepartments().subscribe((responce)=>{
      this.departmentList = responce as Department[];
    })
  }

changeDept(event:any){

  }
}
