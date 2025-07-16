import { Component } from '@angular/core';
import { AccountsService } from '../accounts.service';
import { HttpClientTestingModule } from '@angular/common/http/testing'; 

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent {

  constructor(private _accounts:AccountsService){
    
  }

  accountdetails(){}
}
