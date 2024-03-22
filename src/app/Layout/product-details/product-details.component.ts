import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsService } from '../../Model/Services/Products/products.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../Model/Interfaces/product.interface';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  productData!:Product;

  constructor(private _ActivatedRoute:ActivatedRoute , private _ProductsService:ProductsService ){}

  ngOnInit(): void {
    
    this._ActivatedRoute.paramMap.subscribe((p)=>{
      this._ProductsService.getSpecificProduct(p.get('id')).subscribe({
        next : (res:Product[])=>{
          this.productData= res[0]
        },
        error:(err:any)=>{console.log(err)}
      })
    })
    
  }

}
