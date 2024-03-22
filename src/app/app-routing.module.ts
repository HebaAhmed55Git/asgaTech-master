import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'' , redirectTo : "products" , pathMatch:"full"},
  {path:'products' ,loadComponent:()=>import("./Layout/products/products.component").then(m=>m.ProductsComponent),title:"Products"},
  {path:'orders' ,loadComponent:()=>import("./Layout/orders/orders.component").then(m=>m.OrdersComponent),title:"Ordres"},
  {path:'customers' ,loadComponent:()=>import("./Layout/customers/customers.component").then(m=>m.CustomersComponent),title:"Customers"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
