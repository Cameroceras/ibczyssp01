import { Component, OnInit } from '@angular/core';
import {AdvertBean} from "../../../../beans/advert-bean";

const adverts:AdvertBean[]=[
  {id:1,name:'name',appName:'appname',status:true},
  {id:1,name:'name',appName:'appname',status:true},
  {id:1,name:'name',appName:'appname',status:true},
  {id:1,name:'name',appName:'appname',status:true},
  {id:1,name:'name',appName:'appname',status:true},
  {id:1,name:'name',appName:'appname',status:true},
  {id:1,name:'name',appName:'appname',status:true},
  {id:1,name:'name',appName:'appname',status:true},
  {id:1,name:'name',appName:'appname',status:true},
]

@Component({
  selector: 'app-adverttable',
  templateUrl: './adverttable.component.html',
  styleUrls: ['./adverttable.component.css']
})
export class AdverttableComponent implements OnInit {
  mAdverts:AdvertBean[]=adverts;
  statusName: string = "开启中";
  constructor() { }

  ngOnInit() {
  }


}
