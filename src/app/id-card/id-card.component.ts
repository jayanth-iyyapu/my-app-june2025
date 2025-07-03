import { Component } from '@angular/core';
import { IdCardService } from '../id-card.service';
import { CardService } from '../card.service';

@Component({
  selector: 'app-id-card',
  templateUrl: './id-card.component.html',
  styleUrls: ['./id-card.component.css']
})
export class IdCardComponent {
  cards:any[]=[]

  constructor(private _cardService:IdCardService){
    _cardService.getidcard().subscribe(
      (data:any)=>{
        console.log(data);
        this.cards=data;
      },(err:any)=>{
        alert("Internal Server Error")
      }
    )
  }

 
  //  name:string='';
  // phone:number=0;
  // sort(){
  //   console.log(this.name,this.phone);
  //   this._cardService.getidcard(this.name,this.phone).subscribe(
  //     (data:any)=>{
  //       console.log(data);
  //       id
  //     }
  //   )
  // }

   term:string='';
  search(){
    this._cardService.getfilteridcard(this.term).subscribe(
      (data:any)=>{
        console.log(data);
        this.cards=data;
      },(err:any)=>{
        alert('Internal Server Error')
      }
    )
  }
  
}
