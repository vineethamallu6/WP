import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-editobj',
  templateUrl: './editobj.component.html',
  styleUrls: ['./editobj.component.css']
})
export class EditobjComponent implements OnInit {

  constructor(private ser : DataService) { }
newArr;
  ngOnInit() {
    this.newArr = this.ser.getData();
  }
  saveDes(desForm : NgForm) : void {
    this.newArr.push(desForm.value);
   
  console.log(this.newArr)
}
// len = this.newArr.length();

}
