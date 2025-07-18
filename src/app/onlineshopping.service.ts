import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OnlineshoppingService {

  constructor(private _httpClient:HttpClient) { }

  getOnlineShopping():Observable<any>{
    return this._httpClient.get("https://fakestoreapi.com/products")
  }
}
