import {Component, OnInit} from '@angular/core';
import {HeadBean} from "../../beans/head-bean";

const menus: HeadBean[] = [
  {title: "数据查询", url: '/login'},
  {title: "媒体管理", url: '/'},
  {title: "广告位管理", url: '/'},
  {title: "SDK下载", url: '/'},
  {title: "账户管理", url: '/'},
  {title: "其他", url: '/'},
];


@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css']
})
export class HeadComponent implements OnInit {

  items: HeadBean[] = menus;

  constructor() {
  }

  ngOnInit() {
  }

}
