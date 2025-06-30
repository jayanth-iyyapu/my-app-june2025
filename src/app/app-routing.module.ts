import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { ClockComponent } from './clock/clock.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { DirectivesComponent } from './directives/directives.component';
import { EmployeeDataComponent } from './employee-data/employee-data.component';
import { FlipkartComponent } from './flipkart/flipkart.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { OnlineshoppingComponent } from './onlineshopping/onlineshopping.component';
import { MailComponent } from './mail/mail.component';

const routes: Routes = [
  {path:'',component:LoginComponent},   //Default Routing (emptly leaving the path)
  {path:'dashboard',component:DashboardComponent,children:[
    {path:'home',component:HomeComponent}, //Child Routing
    {path:'clock',component:ClockComponent},
    {path:'calculator',component:CalculatorComponent},
    {path:'databinding',component:DatabindingComponent},
    {path:'directives',component:DirectivesComponent},
    {path:'employee-data',component:EmployeeDataComponent},
    {path:'flipkart',component:FlipkartComponent},
    {path:'vehicles',component:VehiclesComponent},
    {path:'onlineshopping',component:OnlineshoppingComponent},
    {path:'mail',component:MailComponent}
  ]}, //Parent Routing (giving some content in path)
  {path:'**',component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
