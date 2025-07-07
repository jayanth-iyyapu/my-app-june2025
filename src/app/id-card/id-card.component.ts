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
    this.loadcards();
  }
  loadcards(){
     this._cardService.getidcard().subscribe(
      (data:any)=>{
        console.log(data);
        this.cards=data;
      },(err:any)=>{
        alert("Internal Server Error")
      }
    )
  }

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

   column:string='';
  order:string='';
  sort(){
    console.log(this.column,this.order);
    this._cardService.getsortedidcard(this.column,this.order).subscribe(
      (data:any)=>{
        console.log(data);
        this.cards=data;
      },(err:any)=>{
        alert('Internal Server Error'); 
      }
    )
  }

  items:any='';
  page:any='';
  pagination(){
    console.log(this.items,this.page);
    this._cardService.getPaginatedidcard(this.items,this.page).subscribe(
      (data:any)=>{
        console.log(data);
        this.cards=data;
     },(err:any)=>{
      alert('Internal Server Error')
     }
    )
  }

  delete(id:any){
  if(confirm('Are you sure to Delete')==true){
  this._cardService.deleteCard(id).subscribe(
     (data:any)=>{
        alert("Record deleted successfully");
        this.loadcards();
      },(err:any)=>{
        alert('Internal Server Error');
      }
  )
  }else{
    alert("You have Cancelled");
  }
}


  
}
