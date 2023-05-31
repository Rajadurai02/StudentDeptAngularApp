import { Component, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DepartmentService } from '../department.service';
import { DepartmentlistComponent } from '../departmentlist/departmentlist.component';
import { Department } from '../Models/Department';

@Component({
  selector: 'app-addor-edit-department',
  templateUrl: './addor-edit-department.component.html',
  styleUrls: ['./addor-edit-department.component.css']
})
export class AddorEditDepartmentComponent {
  @Input() public Department:any
  department: Department;
  constructor(private _service:DepartmentService,private _fb:FormBuilder,private _parent:DepartmentlistComponent) {
    this.department = new Department();
  }

  ngOnInit(): void {
    this.department = this.Department;
    console.log('calleed');
  }

  get DepartmentName(){
    return this.DepartmentForm.get('DepartmentName');
  }

  DepartmentForm = this._fb.group({
    DepartmentName: ['',[Validators.required,Validators.minLength(6)]]
  })

  addOrEditDepartment(){
    if(this.department.departmentID > 0){
      this.EditDepartment();
    }
    else{
      this.AddDepartment();
    }
  }

  EditDepartment(){
    this._service.editDepartment(this.department).subscribe((data)=>{
      alert("Saved Successfully");
      this._parent.getAllDepartments();
      this._parent.ActiveAddOrEditComp = false;
    },
    (error: Response) => { 
      alert("Error Happened");  
    });
  }

  AddDepartment(){
    this._service.addDepartment(this.department).subscribe((data)=>{
      alert("Saved Successfully");
      this._parent.getAllDepartments();
      this._parent.ActiveAddOrEditComp = false;
    },
    (error: Response) => { 
      alert("Error Happened");  
    });
  }
}

