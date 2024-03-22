import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/Model/Services/Products/products.service';
import {Product} from '../../Model/Interfaces/product.interface'
import { HighlightDirective } from 'src/app/Model/Directives/highlight.directive';
import { CommonModule } from '@angular/common';
import { SearchItemPipe } from 'src/app/search-item.pipe';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { CarouselModule } from 'ngx-owl-carousel-o';
import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-products',
  standalone:true,
  imports:[HighlightDirective,CommonModule , SearchItemPipe , FormsModule,RouterModule,CarouselModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  productsList:Product[]=[];
  userTerm:string="";
/*====================== Carousel configurations ================*/
  customOptions: OwlOptions = {
    loop: true,
    autoplay:true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 6
      }
    },
    nav: true
  }


  constructor(private _ProductsService:ProductsService)
  {}

  ngOnInit(): void {


    this._ProductsService.getProducts().subscribe({
      next : (res:any)=>{
          this.productsList = res;
      },
      error : (err:any)=>{console.log(err)},
      complete:()=>{console.log("Done")}
    })
    
  }

  prodTrackByFn(index:number , product:Product)
  {
    return product.ProductId
  }

}
