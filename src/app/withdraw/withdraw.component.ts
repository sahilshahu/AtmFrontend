import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WithdrawService } from '../service/withdraw.service';
import { Withdraw } from './withdraw';

@Component({
  selector: 'app-withdraw',
  templateUrl: './withdraw.component.html',
  styleUrls: ['./withdraw.component.scss']
})
export class WithdrawComponent implements OnInit {


  withdraw: Withdraw = new Withdraw();
  constructor(private withdrawService: WithdrawService,
    private router: Router) { }

  ngOnInit(): void {
  }

  saveWithdaw(){
    this.withdrawService.createWithdraw(this.withdraw).subscribe( data =>{
      console.log(data); 
    },
    error => console.log(error));
    }
  toWithdraw(){
this.router.navigate(['/Withdraw']);
  }

onSubmit(){
  console.log(this.withdraw);
  this.saveWithdaw();

}
}