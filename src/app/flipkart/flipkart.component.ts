import { Component } from '@angular/core';
import { ChildActivationEnd } from '@angular/router';

@Component({
  selector: 'app-flipkart',
  templateUrl: './flipkart.component.html',
  styleUrls: ['./flipkart.component.css']
})
export class FlipkartComponent {
   products: any = [
    { name: 'pen', price: 10, rating: 3, freeDelivery: true },
    { name: 'phone', price: 100, rating: 2, freeDelivery: false },
    { name: 'shirt', price: 400, rating: 4, freeDelivery: true },
    { name: 'cap', price: 200, rating: 5, freeDelivery: false },
    { name: 'umbrella', price: 300, rating: 2, freeDelivery: true },
    { name: 'mobile case', price: 400, rating: 2.5, freeDelivery: false },
    { name: 'remote', price: 250, rating: 3.8, freeDelivery: true },
     { name: 'watch', price: 5000, rating: 4.5, freeDelivery: true }
  ];

  delete(index:any){
    this.products.splice(index,1)
  }

  check:any='';
  search(){
this.products=this.products.filter((product:any)=>product.name.includes(this.check))
  }
  
  proName:string="";
  proPrice:number=0;
  proRating:number=0;
  proFreeDelivery:boolean=true;
  add(){
     let user ={
      name:this.proName,
      price:this.proPrice,
      rating:this.proRating,
      freeDelivery:this.proFreeDelivery
     }
    console.log(user);
    this.products.unshift(user);
  }

  freeDelvry(){
    this.products=this.products.filter((product:any) =>product.freeDelivery==true);
  }
sortByLow(){
this.products.sort((a:any,b:any)=>a.price-b.price);
}

sortByHigh(){
this.products.sort((a:any,b:any)=>b.price-a.price);
}

sortByRatingLow(){
this.products.sort((a:any,b:any)=>a.rating-b.rating);
}

sortByRatingHigh(){
this.products.sort((a:any,b:any)=>b.rating-a.rating);
}

discount(){

}

deliveryCharge(){

}

totalPrice(){

}

totalCart(){

}
}
