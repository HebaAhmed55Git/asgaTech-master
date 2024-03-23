import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdresService } from '../../Model/Services/Orders/ordres.service';
import {Order} from '../../Model/Interfaces/ordre.interface';
import {GetPricePipe} from '../../Model/Pipes/get-price.pipe'
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [CommonModule,GetPricePipe , RouterLink],
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent {

  ordersList!:Order[];

  constructor(private _OrdresService:OrdresService)
  {}

  ngOnInit(): void {

    this._OrdresService.getOrders().subscribe({
      next : (res:any)=>{
          this.ordersList = res;
      },
      error : (err:any)=>{console.log(err)},
      complete:()=>{console.log("Done")}
    })
    
  }

}
