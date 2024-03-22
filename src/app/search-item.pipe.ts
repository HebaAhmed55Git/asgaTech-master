import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './Model/Interfaces/product.interface';

@Pipe({
  name: 'searchItem',
  standalone: true
})
export class SearchItemPipe implements PipeTransform {

  transform(allList:Product[], term:string):Product[] {
    return allList.filter(p=>p.ProductName.toLowerCase().includes(term.toLowerCase()));
  }

}
