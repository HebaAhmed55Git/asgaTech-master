import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import {Order} from '../../Interfaces/ordre.interface'
@Injectable({
  providedIn: 'root'
})
export class OrdresService {
  private ordersUrl!:string;

  constructor(private _HttpClient:HttpClient) { 
    this.ordersUrl = "./assets/Data/orders.json";

  }

  getOrders():Observable<Order[]>
  {
    return this._HttpClient.get<Order[]>(this.ordersUrl);
  }
}
