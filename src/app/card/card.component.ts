import { Component } from '@angular/core';
import { CardService } from '../card.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
card:any[]=[]

   constructor(private _card:CardService){
    _card.getcard().subscribe(
    (data:any)=>{
      console.log(data);
      this.card=data;
    },(err:any)=>{
      alert('Internal Server Error!');
    })
   }
}
