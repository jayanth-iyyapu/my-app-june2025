import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { ClockComponent } from './clock/clock.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DirectivesComponent } from './directives/directives.component';
import { EmployeeDataComponent } from './employee-data/employee-data.component';
import { FlipkartComponent } from './flipkart/flipkart.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
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
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { Sibling1Component } from './sibling1/sibling1.component';
import { Sibling2Component } from './sibling2/sibling2.component';
import { RatingComponent } from './rating/rating.component';
import { TextareaComponent } from './textarea/textarea.component';
import { AboutUsModule } from './about-us/about-us.module';
import { CapitalDirective } from './capital.directive';
import { RupeePipe } from './rupee.pipe';
import { AuthInterceptor } from './auth.interceptor';
import { HooksComponent } from './hooks/hooks.component';
import { StoreModule } from '@ngrx/store';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { countReducer } from './store/counter.reducer';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    HomeComponent,
    ErrorComponent,
    ClockComponent,
    CalculatorComponent,
    DatabindingComponent,
    DirectivesComponent,
    EmployeeDataComponent,
    FlipkartComponent,
    VehiclesComponent,
    OnlineshoppingComponent,
    MailComponent,
    CardComponent,
    WeatherComponent,
    CreateVehicleComponent,
    IdCardComponent,
    CreateStudentComponent,
    VehicleDetailsComponent,
    CreateIdcardComponent,
    IdcardDetailsComponent,
    AccountsComponent,
    RegistrationComponent,
    ParentComponent,
    ChildComponent,
    Sibling1Component,
    Sibling2Component,
    RatingComponent,
    TextareaComponent,
    CapitalDirective,
    RupeePipe,
    HooksComponent,
    AdminComponent,
    UserComponent,
    HeaderComponent,
    ContentComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AboutUsModule,
    StoreModule.forRoot({counter:countReducer}, {})
  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,
      useClass:AuthInterceptor,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
