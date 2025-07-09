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
import { CardComponent } from './card/card.component';
import { WeatherComponent } from './weather/weather.component';
import { CreateVehicleComponent } from './create-vehicle/create-vehicle.component';
import { IdCardComponent } from './id-card/id-card.component';
import { CreateStudentComponent } from './create-student/create-student.component';
import { VehicleDetailsComponent } from './vehicle-details/vehicle-details.component';
import { CreateIdcardComponent } from './create-idcard/create-idcard.component';
import { IdcardDetailsComponent } from './idcard-details/idcard-details.component';
import { AccountsComponent } from './accounts/accounts.component';
import { RegistrationComponent } from './registration/registration.component';
import { AuthGuard } from './auth.guard';
import { ParentComponent } from './parent/parent.component';

const routes: Routes = [
  {path:'',component:LoginComponent},   //Default Routing (emptly leaving the path)
  {path:'registration',component:RegistrationComponent},
  {path:'dashboard',component:DashboardComponent,canActivate:[AuthGuard],children:[
    {path:'home',component:HomeComponent}, //Child Routing
    {path:'clock',component:ClockComponent},
    {path:'calculator',component:CalculatorComponent},
    {path:'databinding',component:DatabindingComponent},
    {path:'directives',component:DirectivesComponent},
    {path:'employee-data',component:EmployeeDataComponent},
    {path:'flipkart',component:FlipkartComponent},
    {path:'vehicles',component:VehiclesComponent},
    {path:'onlineshopping',component:OnlineshoppingComponent},
    {path:'mail',component:MailComponent},
    {path:'card',component:CardComponent},
    {path:'weather',component:WeatherComponent},
    {path:'create-vehicle',component:CreateVehicleComponent},
    {path:'id-card',component:IdCardComponent},
    {path:'create-idcard',component:CreateIdcardComponent},
    {path:'edit-idcard/:id',component:CreateIdcardComponent},
    {path:'create-student',component:CreateStudentComponent},
    {path:'vehicle-details/:id',component:VehicleDetailsComponent},
    {path:'edit-vehicle/:id',component:CreateVehicleComponent},
    {path:'idcard-details/:id',component:IdcardDetailsComponent},
    {path:'accounts',component:AccountsComponent},
    {path:'parent',component:ParentComponent},


  ]}, //Parent Routing (giving some content in path)
  {path:'**',component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
