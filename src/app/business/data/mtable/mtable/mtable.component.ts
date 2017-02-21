import {Component, OnInit} from '@angular/core';

const values: string[] = ["adf",  "asdfasdf", "ss", "asdfasdf", "adsfsaf", "adsfsaf", "ss", "asdfasdf", "adsfsaf", "ss", "asdf"]

@Component({
  selector: 'app-mtable',
  templateUrl: './mtable.component.html',
  styleUrls: ['./mtable.component.css']
})
export class MtableComponent implements OnInit {
  data: string = "123456";
  mvalues: string[] = values;

  constructor() {
  }

  ngOnInit() {
  }

}
