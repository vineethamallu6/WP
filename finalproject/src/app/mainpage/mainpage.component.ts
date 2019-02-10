import { Component, OnInit } from '@angular/core';
import {Dataservice} from '../dataservice.service';
import {AppComponent} from '../app.component';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {
  products:any=[];
  selected:any;
  isselected=false;
  isall=true;

  constructor(public dataservice:Dataservice, private router:Router, private http:HttpClient) {
    var p = this.http.get('http://127.0.0.1:3000/getproduct');
    p.subscribe(k=> {this.products = k;   console.log(this.products)});
    // this.products = dataservice.products;
    // console.log("main"+this.products.length);
   }

  ngOnInit() {
  }
  // searchresults(){
  //   if(this.dataservice.searchitem!=null){
  //     this.products=[];
  //     this.userdetails =this.dataservice.returnData() 
  //     for (var i=0;i<this.userdetails.length;i++){
  //     if(this.userdetails[i].cat===this.dataservice.searchitem){
  //       this.products.push(this.userdetails[i]);
  //       console.log(this.products)
  //     }
  //   }}
  //   else {
  //     this.products=this.dataservice.returnData();
  //     console.log(this.products);
  //   }
  // }
  getdetails(selecteditem:any){
  //   console.log(selecteditem);
  //   this.selected = selecteditem;
  //   this.isselected=true;
  //   this.isall = false;
  this.router.navigate(['/product',selecteditem]);
  }
}
