import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-utilities',
  templateUrl: './utilities.component.html',
  styleUrls: ['./utilities.component.scss']
})
export class UtilitiesComponent implements OnInit {
  constructor() { }

  public showTips:boolean

  ngOnInit() {
    if(window.location.href.endsWith("utilities"))
    this.showTips = true; 
  }

  turnToUtility(){
    this.showTips = false;
  } 
}
