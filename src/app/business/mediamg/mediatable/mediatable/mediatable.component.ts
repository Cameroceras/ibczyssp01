import {Component, OnInit} from '@angular/core';
import {MediaBean} from "../../../../beans/media-bean";

const mediaes: MediaBean[] = [
  {id: 1, name: 'name', type: 'wode', os: 'android', status: true},
  {id: 1, name: 'name', type: 'wode', os: 'android', status: true},
  {id: 1, name: 'name', type: 'wode', os: 'android', status: true},
  {id: 1, name: 'name', type: 'wode', os: 'android', status: true},
  {id: 1, name: 'name', type: 'wode', os: 'android', status: true},
  {id: 1, name: 'name', type: 'wode', os: 'android', status: true},
]

@Component({
  selector: 'app-mediatable',
  templateUrl: './mediatable.component.html',
  styleUrls: ['./mediatable.component.css']
})
export class MediatableComponent implements OnInit {
  mmediaes: MediaBean[] = mediaes;

  constructor() {
  }

  ngOnInit() {
  }

}
