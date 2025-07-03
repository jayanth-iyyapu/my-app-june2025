import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IdCardService {

  constructor(private _httpClient:HttpClient) { }
  getidcard():Observable<any>{
    return this._httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/student")
  }

  getfilteridcard(term:any):Observable<any>{
    return this._httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/student?filter="+term);
  }

}
