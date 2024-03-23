import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotfoundComponent } from './Layout/notfound/notfound.component';

const routes: Routes = [
  {path:'' , redirectTo : "products" , pathMatch:"full"},
  {path:'products' ,loadComponent:()=>import("./Layout/products/products.component").then(m=>m.ProductsComponent),title:"Products"},
  {path:'productDetails/:id' ,loadComponent:()=>import("./Layout/product-details/product-details.component").then(m=>m.ProductDetailsComponent),title:"Product Details"},
  {path:'orders' ,loadComponent:()=>import("./Layout/orders/orders.component").then(m=>m.OrdersComponent),title:"Ordres"},
  {path:'customers' ,loadComponent:()=>import("./Layout/customers/customers.component").then(m=>m.CustomersComponent),title:"Customers"},
  {path:'orderDetails/:id' ,loadComponent:()=>import("./Layout/order-details/order-details.component").then(m=>m.OrderDetailsComponent),title:"Order Details"},
  {path:'**' , component:NotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
