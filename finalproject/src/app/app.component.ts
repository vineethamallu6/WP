import { Component, Input } from '@angular/core';
import { injectTemplateRef } from '@angular/core/src/render3/view_engine_compatibility';
import { Dataservice } from './dataservice.service';
import { serializePath } from '@angular/router/src/url_tree';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  searchitem: any;

  searchname: any;
  products: any = [];
  loginsuccess: any;
  productscat: any = [];

  loginsucess:boolean;


  title = 'Registration';
  constructor(private data: Dataservice, private http: HttpClient) {

    var p = this.http.get('http://127.0.0.1:3000/getproduct');
    p.subscribe(k => this.products = k);

    

  }
  ngOnInit() {
    
  }

  gettingresults() {
    console.log(this.searchitem);
    this.data.getData(this.searchitem);

  }

  making(data) {
    console.log(data);
    this.loginsuccess = data;
    console.log(this.loginsuccess);
  }
  temp() {

    for (let index = 0; index < this.products.length; index++) {

      var x = this.products[index].title;

      if (this.productscat.indexOf(x) == -1) {


        this.productscat.push(this.products[index].title);

      }
    }

  }
  
}
