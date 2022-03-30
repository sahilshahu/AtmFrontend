import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './customer/customer.component';
import { HomepageComponent } from './homepage/homepage.component';

const routes: Routes = [

  {path: 'home', component: HomepageComponent},
  {path: 'create-customer', component: CustomerComponent}, //this is to route to the customer component by provide the path as create customer
  {path: '', redirectTo: 'create-customer', pathMatch:"full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
