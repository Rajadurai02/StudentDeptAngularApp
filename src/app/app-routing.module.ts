import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentlistComponent } from './departmentlist/departmentlist.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { RegisterComponent } from './register/register.component';
import { StudentlistComponent } from './studentlist/studentlist.component';

const routes: Routes = [
  {path:"",component:LoginComponent},
  {path:"Login",component:LoginComponent},
  {path:"Register",component:RegisterComponent},
  {path:"Home",component:HomeComponent,children:[
    {path:"",component:StudentlistComponent},
    {path:"Studentlist",component:StudentlistComponent},
    {path:"Departmentlist",component:DepartmentlistComponent}
  ]},
  {path:"**",component:PagenotfoundComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
