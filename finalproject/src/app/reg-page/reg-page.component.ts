import { Component, OnInit } from '@angular/core';
import { RegDetails} from './Reg';
//import { ngForm } from '@angular/core'
import { FormGroup, FormBuilder, Validators, EmailValidator } from '@angular/forms';
import { Dataservice} from '../dataservice.service';
import {NgForm} from '@angular/forms';
@Component({
  selector: 'app-reg-page',
  templateUrl: './reg-page.component.html',
  styleUrls: ['./reg-page.component.css']
})
export class RegPageComponent implements OnInit {
  registerForm : FormGroup;
  email1:any;
  password1:string;
  number1:any;
  model:RegDetails[]= [];
  submitted:boolean;
  constructor(private servicedata:Dataservice) {
   this.submitted = false;
   }
   
  ngOnInit() {
  }
//   submit(f:NgForm) {
//     console.log(this.registerForm);
//     if (this.email != '' && this.password != '' && this.number != '') {
//         this.model.push(f.value);
//         alert("You have succesfully registered");
//         console.log(this.model);
//         f.reset();
//     } else { 
//       alert ("You need to enter your credentials properly");
//     }
//     }
register(){
   var temp ={"username":this.email1,"password":this.password1,"phoneno":this.number1};
   console.log(temp);
   this.servicedata.pushData(temp);
} 
  }


