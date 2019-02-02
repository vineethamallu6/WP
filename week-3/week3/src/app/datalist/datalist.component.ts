import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-datalist',
  templateUrl: './datalist.component.html',
  styleUrls: ['./datalist.component.css']
})
export class DatalistComponent implements OnInit {
  arrList;
  editData : boolean = false;

  constructor(private ser : DataService) { }

  ngOnInit() {
    this.arrList = this.ser.getData();
  }
  del(index) {
    this.ser.delData(index);
  }
  edit() {
    this.editData = true;
  }

}
