import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IdCardService } from '../id-card.service';

@Component({
  selector: 'app-idcard-details',
  templateUrl: './idcard-details.component.html',
  styleUrls: ['./idcard-details.component.css']
})
export class IdcardDetailsComponent {
id:number=0;
studentdetails:any={};
constructor(private _activatedRoute:ActivatedRoute, private _idcardService:IdCardService){
  _activatedRoute.params.subscribe(
    (data:any)=>{
      console.log(data.id);
      this.id=data.id;
    },(err:any)=>{
      alert('unable to get ID');
    }
  )
  _idcardService.getidcarddetails(this.id).subscribe(
     (data:any)=>{
      console.log(data);
      this.studentdetails=data;
    },(err:any)=>{
      alert('Internal Server Error');
    }
  )
}

}
