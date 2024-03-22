import { Pipe, PipeTransform } from '@angular/core';
import { ProductsService } from '../Services/Products/products.service';
import { Product } from '../Interfaces/product.interface';

@Pipe({
  standalone:true,
  name: 'getPrice'
})
export class GetPricePipe implements PipeTransform {

  prodPrice!:number;
  constructor(private _ProductsService:ProductsService){}

  transform(prodIndex:number , prodQuantity:number):void {
    

  }

}
