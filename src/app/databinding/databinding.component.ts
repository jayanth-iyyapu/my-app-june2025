import { Component } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent {
  //interpolation
  userName:string='Jayanth';
  age:number=25

  //property binding
  isDataPresent:Boolean=true;

  //event binding
  click(){
    alert('Hello')
  }

  myName:string='Jayanth'

  //two way data binding
  mobile:string='+91';
  name(){
    //alert('this.mobile')
    console.log(this.mobile);
  }
}
