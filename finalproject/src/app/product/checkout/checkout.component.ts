import { Component, OnInit } from '@angular/core';
import {Dataservice} from '../../dataservice.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  checkpop:boolean= false;
  finishmsg:boolean= false;
  totalamount:any;
  constructor(private dataservice:Dataservice) { }

  ngOnInit() {
    this.totalamount=this.dataservice.gettotal();
    console.log(this.totalamount);
  }

  checkmethod() {
    this.checkpop = !this.checkpop;
    
    
    
  }
  completedmethod() {
    this.dataservice.update(this.dataservice.cartindex);
    this.finishmsg = !this.finishmsg;
  }
  
}
