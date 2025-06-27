import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent {
  states:string[]=['Andhra pradesh','Telangana','Tamilnadu','Kerala','Karnataka'];
  ages:number[]=[29,30,95,44,55];

  //accessIdentifier variableName:dataType=initialValue;
  age:number=0;

  products:any[]=[
    {productName:'Tv one',price:14000,rating:1.9},
    {productName:'AC',price:45000,rating:3.9},
    {productName:'Parker pen',price:500,rating:1.6},
    {productName:'Laptop',price:150000,rating:4.0},
    {productName:'Washing Machine',price:35000,rating:3.7},
    {productName:'Mobile',price:13000,rating:4.6},
    
  ]
  date:any= new  Date();
}
