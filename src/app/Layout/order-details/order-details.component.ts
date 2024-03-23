import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { OrdresService } from '../../Model/Services/Orders/ordres.service';
import { Order } from '../../Model/Interfaces/ordre.interface';
import {  CustomersService } from '../../Model/Services/Customers/customers.service';

import {Customer} from '../../Model/Interfaces/cutomers.interface'

@Component({
  selector: 'app-order-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss']
})
export class OrderDetailsComponent implements OnInit {

  orderData!:Order;
  userData!:Customer;

  constructor(private _ActivatedRoute:ActivatedRoute , private _OrdresService:OrdresService , private _CustomersService:CustomersService){}

  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe((p)=>{

      this._OrdresService.getSpecificOrder(p.get("id")).subscribe({
        next : (res:Order[])=>{
          this.orderData = res[0];

          this._CustomersService.getSpecificUser(this.orderData.UserId).subscribe({

            next :(res:Customer[])=>{
              
              this.userData = res[0];
            }
          })
        },
        error:(err:any)=>{console.log(err)}

      })
      
    })
    
    
    
  }
}
