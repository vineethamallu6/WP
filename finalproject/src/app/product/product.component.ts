import { Component, OnInit, Input } from '@angular/core';
import {Dataservice} from '../dataservice.service';
import { ActivatedRoute } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';
import {HttpClient} from '@angular/common/http';


import {Router} from '@angular/router';
import { MainpageComponent } from '../mainpage/mainpage.component';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
 
  items:any;
  index:any;
  reviews:any = [];
  thisreviews:any = [];
  showHide :boolean= false;
  review :any;
  name :any;
  id: any;
  name1:any;
  quantity:any=1;
  constructor(public dataservice:Dataservice, private routeparams:ActivatedRoute ,private router:Router,private http:HttpClient) {
    this.reviews = this.dataservice.reviewarr;
   
    
    this.routeparams.params.subscribe(dataRoute =>{
    this.items = this.dataservice.products;

    
    var data = dataRoute.title;
   
    console.log("data "+data);
    for(var i=0;i<this.items.length;i++){
      
      if(this.items[i].title===data){
        this.index=i;
      }
    }
    for (var i=0;i<this.reviews.length;i++){
      if(this.reviews[i].pname==this.items[this.index].title){
        this.thisreviews.push(this.reviews[i]);
      }
    }
    
    });
    
  
  }


  
  cart(temp:any, index:number){
    
    
    this.dataservice.cartadd(index,this.quantity);

  }
  


   editreviews() : void {
    
    this.dataservice.reviews({"name":this.name1,"review":this.review,"pname":this.items[this.index].title});
    
    
    this.review="";
    this.showHide = !this.showHide;

   }

   changeShowStatus(){
    this.showHide = !this.showHide;
    
  }

  ngOnInit() {
   
    
    
}
}
