import { Pipe, PipeTransform } from '@angular/core';
import { ProductsService } from '../Services/Products/products.service';
import { Product } from '../Interfaces/product.interface';

@Pipe({
  standalone:true,
  name: 'getPrice'
})
export class GetPricePipe implements PipeTransform {

  totalPrice:number=0;
  constructor(private _ProductsService:ProductsService){}

  transform(ProductsList:any):number {

    for(let i=0; i < ProductsList.length ; i++)
    {

      this._ProductsService.getSpecificProduct(ProductsList[i].ProductId).subscribe({
        next : (res:Product[])=>{
          this.totalPrice +=res[0].ProductPrice * ProductsList[i].Quantity
        },
        error:(err:any)=>{console.log(err)}
      })

      
      
    }

    return this.totalPrice;
    

  }

}
