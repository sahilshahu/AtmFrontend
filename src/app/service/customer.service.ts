
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Customer } from '../customer/customer';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

private baseURL = "http://localhost:8082/customer";

  constructor(private httpClient: HttpClient) { }

createCustomer(customer : Customer): Observable<Object>{
  return this.httpClient.post(`${this.baseURL}/addCustomer`, customer);
}

}
