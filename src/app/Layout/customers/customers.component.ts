import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Customer } from 'src/app/Model/Interfaces/cutomers.interface';
import { CustomersService } from 'src/app/Model/Services/Customers/customers.service';



@Component({
  selector: 'app-customers',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {
  customersList!:Customer[];

  constructor(private _CustomersService:CustomersService)
  {}

  ngOnInit(): void {

    this._CustomersService.getCustomers().subscribe({
      next : (res)=>{
          this.customersList = res;
      },
      error : (err)=>{console.log(err)},
      complete:()=>{console.log("Done")}
    })
    
  }
}
