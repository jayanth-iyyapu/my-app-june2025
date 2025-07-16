import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing'; 

@Injectable({
  providedIn: 'root'
})
export class AccountsService {

  constructor(private _httpclient:HttpClient) { }
  accountdetails():Observable<any>{
  return this._httpclient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/principals")
  }
}
