import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import {Product} from '../../Interfaces/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private productsUrl!:string;

  constructor(private _HttpClient:HttpClient) { 
    this.productsUrl = "http://localhost:3000/products";

  }

  getProducts():Observable<Product[]>
  {
    return this._HttpClient.get<Product[]>(this.productsUrl);
  }

  getSpecificProduct(prodId:number):Observable<Product[]>
  {
     return this._HttpClient.get<Product[]>(`${this.productsUrl}?ProductId=${prodId}`)
  }

}
