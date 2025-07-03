import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  constructor(private _httpClient:HttpClient) { }
  getcard(){
    return this._httpClient.get('https://picsum.photos/v2/list?page=1&limit=100')
  }
}
