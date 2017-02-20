import {Component, OnInit} from '@angular/core';
import {MdDialog, MdDialogRef} from "@angular/material";
import {extractProgramSymbols} from "@angular/compiler";
import {MediamgComponent} from "../../mediamg/mediamg/mediamg.component";

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {
  selected:string;

  constructor(public dialog:MdDialog) {
  }

  ngOnInit() {
  }



}


