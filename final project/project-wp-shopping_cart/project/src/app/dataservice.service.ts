import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { template } from '@angular/core/src/render3';
import { analyzeAndValidateNgModules } from '@angular/compiler';
// import {product} from './product/product';
@Injectable({
  providedIn: 'root'
})
export class Dataservice {
  userdetails=[];
  // products:any = [{"title": "Samsung madhuri J6","description": "Super AMOLED Display with 1480 x 720 (HD+) Resolution","image": "1.jpeg","quantity":"10", "cat":"phones","price":15000},{"title": "Mi A2","description": "15.2cm (5.99) large display","image": "2.jpeg","quantity":"20","cat":"laptops","price":"18050"},{"title": "Apple iphone 32GB","description": "11.4 cm(4.7)display","image": "3.jpeg","quantity":"30","cat":"phones","price":"15500"},{"title": "iphone","description": "15.9 cm (6.26 inch) FHD+ Display with Resolution ","image": "4.jpeg","quantity":"40","cat":"clothes","price":"19999"},{"title": "apple","description": "Super AMOLED Display with 1480 x 720 (HD+) Resolution","image": "1.jpeg","quantity":"10", "cat":"laptops","price":"19999"},{"title": "one plus","description": "15.2cm (5.99) large display","image": "2.jpeg","quantity":"20","cat":"clothes","price":"39000"},{"title": "Apple iphone 32GB","description": "11.4 cm(4.7)display","image": "3.jpeg","quantity":"30", "cat":"cycles","price":"25000"},{"title": "moto","description": "15.9 cm (6.26 inch) FHD+ Display with Resolution ","image": "4.jpeg","quantity":"40", "cat":"phones","price":"12000"},{"title": "Samsung Galaxy J6","description": "Super AMOLED Display with 1480 x 720 (HD+) Resolution","image": "1.jpeg","quantity":"10", "cat":"phones","price":"16000"},{"title": "Mi A2","description": "15.2cm (5.99) large display","image": "2.jpeg","quantity":"20","cat":"laptops","price":"30000"},{"title": "Apple iphone 32GB","description": "11.4 cm(4.7)display","image": "3.jpeg","quantity":"30","cat":"phones","price":"29000"},{"title": "iphone","description": "15.9 cm (6.26 inch) FHD+ Display with Resolution ","image": "4.jpeg","quantity":"40","cat":"clothes","price":"19000"},{"title": "apple","description": "Super AMOLED Display with 1480 x 720 (HD+) Resolution","image": "1.jpeg","quantity":"10", "cat":"laptops","price":"29999"},{"title": "one plus","description": "15.2cm (5.99) large display","image": "2.jpeg","quantity":"20","cat":"clothes","price":"38050"},{"title": "Apple iphone 32GB","description": "11.4 cm(4.7)display","image": "3.jpeg","quantity":"30", "cat":"cycles","price":"26000"},{"title": "moto","description": "15.9 cm (6.26 inch) FHD+ Display with Resolution ","image": "4.jpeg","quantity":"40", "cat":"phones","price":"26000"},{"title": "Samsung Galaxy J6","description": "Super AMOLED Display with 1480 x 720 (HD+) Resolution","image": "1.jpeg","quantity":"10", "cat":"phones","price":"26000"},{"title": "Mi A2","description": "15.2cm (5.99) large display","image": "2.jpeg","quantity":"20","cat":"laptops","price":"26000"},{"title": "Apple iphone 32GB","description": "11.4 cm(4.7)display","image": "3.jpeg","quantity":"30","cat":"phones","price":"26000"},{"title": "iphone","description": "15.9 cm (6.26 inch) FHD+ Display with Resolution ","image": "4.jpeg","quantity":"40","cat":"clothes","price":"25900"},{"title": "apple","description": "Super AMOLED Display with 1480 x 720 (HD+) Resolution","image": "1.jpeg","quantity":"10", "cat":"laptops","price":"25900"},{"title": "one plus","description": "15.2cm (5.99) large display","image": "2.jpeg","quantity":"20","cat":"clothes","price":"25900"},{"title": "Apple iphone 32GB","description": "11.4 cm(4.7)display","image": "3.jpeg","quantity":"30", "cat":"cycles","price":"25900"},{"title": "moto","description": "15.9 cm (6.26 inch) FHD+ Display with Resolution ","image": "4.jpeg","quantity":"40", "cat":"phones","price":"25900"},{"title": "Samsung Galaxy J6","description": "Super AMOLED Display with 1480 x 720 (HD+) Resolution","image": "1.jpeg","quantity":"10", "cat":"phones","price":"25900"},{"title": "Mi A2","description": "15.2cm (5.99) large display","image": "2.jpeg","quantity":"20","cat":"laptops","price":"25900"},{"title": "Apple iphone 32GB","description": "11.4 cm(4.7)display","image": "3.jpeg","quantity":"30","cat":"phones","price":"25900"},{"title": "iphone","description": "15.9 cm (6.26 inch) FHD+ Display with Resolution ","image": "4.jpeg","quantity":"40","cat":"clothes","price":"25900"},{"title": "apple","description": "Super AMOLED Display with 1480 x 720 (HD+) Resolution","image": "1.jpeg","quantity":"10", "cat":"laptops","price":"39999"},{"title": "one plus","description": "15.2cm (5.99) large display","image": "2.jpeg","quantity":"20","cat":"clothes","price":"39999"},{"title": "Apple iphone 32GB","description": "11.4 cm(4.7)display","image": "3.jpeg","quantity":"30", "cat":"cycles","price":"39999"},{"title": "moto","description": "15.9 cm (6.26 inch) FHD+ Display with Resolution ","image": "4.jpeg","quantity":"40", "cat":"phones","price":"39999"}];
  products:any=[];
  cartarr:any=[];
  recent:any;
  cartindex:any=[];
  searchitem:any;
  eachproductquan=[];
  validuser:any;
  loginsuccesssymbol = false;
  totalamount:any;
  // productdata:any;
  cartadd(num:any,q:any) {
    
    if(this.cartarr.indexOf(this.products[num]) === -1){
    this.cartarr.push(this.products[num]);
    this.cartindex.push({"index":num,"price":this.products[num].price,"quantity":q});
    console.log(this.cartarr);
    console.log(this.cartindex);

    } else {
      console.log("already there");

    }
  }



  constructor(private http:HttpClient) { 
    var p = this.http.get('http://127.0.0.1:3000/getproduct');
    p.subscribe(k=> {this.products = k;   console.log(this.products)});
  }
  tempdata: any;
  ngOnInit(){

  }
  
  pushData(details:any){
    this.recent = details;
    // console.log("recent is "+this.recent.email)
    // console.log(this.userdetails);
    this.callingServer();
  }
  gettinguserdatadb():any{
    
   
    this.tempdata = this.http.get('http://127.0.0.1:3000/getdetails');
    return this.tempdata;
   

  }

  // gettingproductsdatadb():any{
    
   
  //   var p = this.http.get('http://127.0.0.1:3000/getproduct');
  //   var rrray: any;
  //   console.log(p);
  //   p.subscribe(k=> {this.products = k;});
  //   }
    pushproductsdata(productsinfo){
      this.products= productsinfo;
      console.log("service"+this.products.length)
    }
   

  
  getuserDetails(){

    return this.userdetails;

    // this.searchitem = title;
    
  }
  getproductsData():any{
    return this.products;
  }

  

  callingServer(){
    const headers = new HttpHeaders()
          .set('Authorization', 'my-auth-token')
          .set('Content-Type', 'application/json');
    
    this.http.post('http://127.0.0.1:3000/temp', this.recent,{
      headers: headers
    })
    .subscribe(data => {
      console.log(data);
    });
   
  }
  
  getData(title:any){
    return title;
    // this.searchitem = title;
    
  }
  returnData():any{
    return this.products;
  }
  
  // loginSuccess(){
  //   this.loginsucesssymbol= true;
  // }
  // loginfail(){
  //   this.loginsucesssymbol= false;
  // }
  setvaliduser(name){
    this.validuser=name;
  }
  getvaliduser(){
    return this.validuser;
  }
  // pushquantity(temp:any){
  //   this.eachproductquan = temp;
  //   console.log("in service"+this.eachproductquan);
  // }
  // getquantity():number[]{
  //   return this.eachproductquan;
  // }

  settotal(temp){
    this.totalamount = temp;
    console.log(this.totalamount);
  }
  gettotal(){
    return this.totalamount;
  }
}




