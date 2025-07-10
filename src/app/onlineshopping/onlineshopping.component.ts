import { Component, Input } from '@angular/core';
import { OnlineshoppingService } from '../onlineshopping.service';

@Component({
  selector: 'app-onlineshopping',
  templateUrl: './onlineshopping.component.html',
  styleUrls: ['./onlineshopping.component.css']
})
export class OnlineshoppingComponent {

  onlineshopping:any[]=[]

  constructor(private _onlineShopping:OnlineshoppingService){
    _onlineShopping.getOnlineShopping().subscribe(
          (data:any)=>{
            console.log(data);
            this.onlineshopping=data;
          },(err:any)=>{
            alert('Internal Server Error!');
          }
    )
  }

}
