import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private _httpClient:HttpClient) { }
  userLogin(data:any):Observable<any>{
    return this._httpClient.post(Environment.loginApi,data)
  }
}
