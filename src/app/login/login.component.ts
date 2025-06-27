import { Component } from '@angular/core';

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


}
