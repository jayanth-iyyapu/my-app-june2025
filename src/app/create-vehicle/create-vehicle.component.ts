import { Component } from '@angular/core';
import { VehiclesService } from '../vehicles.service';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { identifierName } from '@angular/compiler';

@Component({
  selector: 'app-create-vehicle',
  templateUrl: './create-vehicle.component.html',
  styleUrls: ['./create-vehicle.component.css']
})
export class CreateVehicleComponent {
  public vehicleForm:FormGroup=new FormGroup({
    Vehicle:new FormControl(),
    cost:new FormControl(),
    fuel:new FormControl(),
    model:new FormControl(),
    type:new FormControl(),
    tyres:new FormControl(),
    manufacturer:new FormControl(),
    image:new FormControl(),
  })

  id:number=0;
  constructor(private _vehiclesService:VehiclesService,private _router:Router,private _activatedRoute:ActivatedRoute){
    _activatedRoute.params.subscribe(
      (data:any)=>{
        console.log(data.id);
        this.id=data.id;
      }
    )

    if(this.id){
    _vehiclesService.getVehicle(this.id).subscribe(
    (data:any)=>{
          console.log(data);
          this.vehicleForm.patchValue(data);
        },(err:any)=>{
           alert("Internal Server Error!");
        }
      )
      }
  }
    submit(){
      if (this.id) {
        //update
        this._vehiclesService.updateVehicle(this.id,this.vehicleForm.value).subscribe(
          (data:any)=>{
            alert('vehicle updated successfully!');
            this._router.navigateByUrl('/dashboard/vehicles');
          },(err:any)=>{
             alert("Internal Server Error!");
          }
        )
        
      } else {
        //create
         console.log(this.vehicleForm.value);
      this._vehiclesService.createVehicle(this.vehicleForm.value).subscribe(
        (data:any)=>{
           alert("Record added successfully");
           this. _router.navigateByUrl("/dashboard/vehicles");
        },(err:any)=>{
           alert("Internal Server Error!");
        }
      )
      }
    }
  

}
