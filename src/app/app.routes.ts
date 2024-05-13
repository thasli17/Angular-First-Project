import { Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { DepartmentComponent } from './Pages/department/department.component';

export const routes: Routes = [
    {path: '',component:HomeComponent},
    {path:'department',component:DepartmentComponent}
];
