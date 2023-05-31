import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { StudentlistComponent } from './studentlist/studentlist.component';
import { DepartmentlistComponent } from './departmentlist/departmentlist.component';
import { AddorEditStudentComponent } from './addor-edit-student/addor-edit-student.component';
import { AddorEditDepartmentComponent } from './addor-edit-department/addor-edit-department.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { UserService } from './user.service';
import { StudentService } from './student.service';
import { DepartmentService } from './department.service';
import { TokenService } from './token.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    StudentlistComponent,
    DepartmentlistComponent,
    AddorEditStudentComponent,
    AddorEditDepartmentComponent,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [UserService,StudentService,DepartmentService,TokenService],
  bootstrap: [AppComponent]
})
export class AppModule { }
