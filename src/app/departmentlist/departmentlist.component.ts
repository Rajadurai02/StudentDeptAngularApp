import { HttpClient } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { DepartmentService } from '../department.service';
import { Department } from '../Models/Department';
import { TokenService } from '../token.service';

@Component({
  selector: 'app-departmentlist',
  templateUrl: './departmentlist.component.html',
  styleUrls: ['./departmentlist.component.css']
})
export class DepartmentlistComponent {
  departmentList:Department[]=[];
  serverError:boolean=false;
  serverErrorMsg:string='';
  Department:Department;
  departmentModalTitle:string='';
  ActiveAddOrEditComp:boolean=false;
  deleteDepartmentId :Number = 0;
  constructor(private _http:HttpClient,private _service:DepartmentService,private _token:TokenService,private _fb:FormBuilder) {
    this.getAllDepartments();
    this.Department = new Department();
  }
  addNewDepartment(){
    this.departmentModalTitle = "Add Department";
    this.Department.departmentID = 0;
    this.Department.departmentName = "";
    this.ActiveAddOrEditComp = true;
  }
  public getAllDepartments(){
    this._service.getDepartments().subscribe((responce)=>{
      this.departmentList = responce as Department[];
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

  editDepartment(dept:any){
    this.departmentModalTitle = "Edit Department";
    this.Department = dept;
    this.ActiveAddOrEditComp = true;
  }

  departmentModalClosed(){
    this.ActiveAddOrEditComp = false;
  }

  deleteDepartment(deptId:Number){
    this.deleteDepartmentId = deptId;
  }

  confirmDeleteDepartment(){
    if(this.deleteDepartmentId > 0){
      this._service.deleteDepartment(this.deleteDepartmentId).subscribe((responce)=>{
        this.getAllDepartments();
        alert('Department removed Successfully');
      });
    }
  }
}
