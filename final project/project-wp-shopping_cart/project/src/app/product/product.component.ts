import { Component, OnInit, Input } from '@angular/core';
import {Dataservice} from '../dataservice.service';
import { ActivatedRoute } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';
import {HttpClient} from '@angular/common/http';


import {Router} from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  // @Input() selecteditem;
  items:any;
  index:any;
  reviewarr:any = [];
  showHide :boolean= false;
  review :any;
  name :any;
  id: any;

  quantity:any=1;
  constructor(public dataservice:Dataservice, private routeparams:ActivatedRoute ,private router:Router,private http:HttpClient) {

    routeparams.params.subscribe(dataRoute =>{
    this.items = this.dataservice.products;
    // var p = this.http.get('http://127.0.0.1:3000/getproduct');
    // p.subscribe(k=> {this.items = k;   console.log(this.items)});

    const data = dataRoute.title;
    console.log("hererere"+data);
    for(var i=0;i<this.items.length;i++){
      // console.log(i);
      if(this.items[i].title===data){
        this.index=i;
      }
    }
    console.log("product   "+  this.index);
    console.log(this.items[this.index].title);

    });
  }
  cart(temp:any, index:number){
    // console.log(index);
    // this.router.navigate(['/cart',temp]);
    
    this.dataservice.cartadd(index,this.quantity);

  }
  


   editreviews(desForm : NgForm) : void {
    // this.reviewarr.push(this.review);
    this.reviewarr.push(desForm.value);
    this.http.post('127.0.0.1:3000/postcomment',{id:"hello"});
    this.review="";
    this.showHide = !this.showHide;

   }

   changeShowStatus(){
    this.showHide = !this.showHide;
    
  }

  ngOnInit() {
    

    
}
}
