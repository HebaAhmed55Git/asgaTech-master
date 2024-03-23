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
    // this.customersUrl = "./assets/Data/users.json";
    this.customersUrl = "http://localhost:3000/Users";
  }

  getCustomers():Observable<Customer[]>
  {
    return this._HttpClient.get<Customer[]>(this.customersUrl);
  }

  getSpecificUser(userId:string|null):Observable<Customer[]>
  {
    return this._HttpClient.get<Customer[]>(`${this.customersUrl}?Id=${userId}`);
  }

}
