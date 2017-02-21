import {Component, OnInit} from '@angular/core';

const medias: string[] = ["全部", "位置"];
const locations: string[] = ["全部", "位置"];
const dates: string[] = ["昨天", "最近一周", "本月", "上月"];

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  mmedias: string[] = medias;
  mlocations: string[] = locations;
  mdates: string[] = dates;


  constructor() {
  }

  ngOnInit() {
  }

}
