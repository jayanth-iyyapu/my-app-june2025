import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
   ispresrent:boolean=false;
  show(){
    console.log(this.ispresrent);
    this.ispresrent=!this.ispresrent;
    console.log(this.ispresrent);
    
  }
  public loginForm:FormGroup=new FormGroup({
    email:new FormControl(),
    password:new FormControl(),
  })
  constructor(private _loginService:LoginService , private _router:Router){}
  login(){
    console.log(this.loginForm.value);
    this._loginService.userLogin(this.loginForm.value).subscribe(
      (data:any)=>{
        alert('Login Successfully!');
        this._router.navigateByUrl('/dashboard');
        sessionStorage.setItem('token',data.token)
      },(err:any)=>{
        alert('Internal server Error')
      }
    )
  }

}
