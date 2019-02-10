import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Router} from'@angular/router'
import { Location } from '@angular/common';
import { Dataservice } from '../dataservice.service';
import { EmailValidator } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email1:any;
  password1:any;
  submitted=false;
  constructor(
    private serviceData:Dataservice,
    private route:ActivatedRoute,
    private location: Location,
    private router :Router
  ) { }

  ngOnInit() {
  }

signin(){
  var details= this.serviceData.gettinguserdatadb();
   console.log(details);
   var flag=false;
   details.subscribe(t=> {
     for(var i=0;i<t.length;i++){
       if(t[i].username==this.email1 && this.password1==t[i].password){
         flag = true;
          console.log("login success");
          this.serviceData.loginsuccesssymbol=true;
          this.serviceData.setvaliduser(this.email1);
          // this.serviceData.loginSuccess();
       }
     }
     if(!flag){
       console.log("enter correct details");
      //  this.router.navigate(['/mainpage', ])
      //  this.serviceData.loginfail();

     }
   });
}
}
