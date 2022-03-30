import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from '../service/customer.service';
import { Customer } from './customer';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {

  customer: Customer = new Customer();

  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
  }

  saveCustomer(){
    this.customerService.createCustomer(this.customer).subscribe(data => {
      console.log(data);
    },
    error => console.log(error));
  }

  onSubmit(){
   console.log(this.customer);
   this.saveCustomer();
  }
}




























//   this.customers = [{
  //     "id" : 1,
  //     "firstName" : "Sahil",
  //     "lastName" : "Shahu",
  //     "mobileNumber" : "1234567890"
  //   },
  // {
  //     "id" : 2,
  //     "firstName" : "Sahil",
  //     "lastName" : "Shahu",
  //     "mobileNumber" : "1234567890"
  // }
  // ];
