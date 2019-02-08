import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Dataservice } from '../../dataservice.service';
import { parse } from 'querystring';
import { parseIntAutoRadix } from '@angular/common/src/i18n/format_number';
import { convertActionBinding } from '@angular/compiler/src/compiler_util/expression_converter';
// import { privateEncrypt } from 'crypto';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  name:any;
  empty = false;
  quantitynum:number=1;
  quantity:any[]=[];
  selectedobjects:any[]=[];
  ind:any;
  total:number=0;
  quan:any;
  constructor( public dataservice: Dataservice ,private routeparams:ActivatedRoute ,router:Router) {

   }

  ngOnInit() {
   
    this.selectedobjects=this.dataservice.cartarr;
    this.quantity = this.dataservice.cartindex;
    // console.log("------>"+this.quantity[0].quantity);
    if(this.selectedobjects.length==0){
      this.empty = true;
    }
    else {
      for (var i=0;i<this.selectedobjects.length;i++){
        
        this.total=this.total+ (parseInt(this.selectedobjects[i].price))*this.quantity[i].quantity;
        console.log(this.total);      
      }
      
    }
    
  //  this.changing();
  
  }
 
  removing(index){
    // for (var i=0;i<this.selectedobjects.length;i++){
      
      this.total=this.total- (parseInt(this.selectedobjects[index].price)*(this.quantity[index].quantity));
      console.log(this.total);

    this.selectedobjects.splice(index,1);

    if(this.total==0){
      this.empty=true;

    }
      
    // }

  }
  
  // changing(){
    
  //   for (var i=0;i<this.selectedobjects.length;i++){
  //     this.total=this.total+ (parseInt(this.selectedobjects[i].price));
  //     console.log(this.total);

      
  //   }
  //   this.dataservice.pushquantity(this.quantity);
  // }

  checkout() {
    if(this.total==0) {
      return false;
    } else {
      this.dataservice.settotal(this.total);
      return true;
    }
    
  }

  
}