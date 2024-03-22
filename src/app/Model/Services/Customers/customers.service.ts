import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import {Customer} from '../../Interfaces/cutomers.interface'

@Injectable({
  providedIn: 'root'
})
export class CustomersService {
  private customersUrl!:string;

  constructor(private _HttpClient:HttpClient) { 
    this.customersUrl = "./assets/Data/users.json";

  }

  getCustomers():Observable<Customer[]>
  {
    return this._HttpClient.get<Customer[]>(this.customersUrl);
  }
}
