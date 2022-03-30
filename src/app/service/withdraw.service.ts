import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WithdrawComponent } from '../withdraw/withdraw.component';
import { HttpClient } from '@angular/common/http'
import { Withdraw } from '../withdraw/withdraw';
@Injectable({
  providedIn: 'root'
})
export class WithdrawService {

  
 private baseURL : "http://localhost:8082/Withdraw";

 
 constructor(private httpClient: HttpClient) { }

 createWithdraw(withdraw : Withdraw): Observable<Object>{
   return this.httpClient.post(`${this.baseURL}/addWithdraw`, withdraw);
 }
}
