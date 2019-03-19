import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timestamp',
  templateUrl: './timestamp.component.html',
  styleUrls: ['./timestamp.component.scss']
})
export class TimestampComponent implements OnInit {
  constructor() { }

  private currentTime:string
  private currentTimestamp:string

  ngOnInit() {
    this.currentTimestamp = (new Date()).valueOf().toString();
    this.currentTime = this.format(parseInt(this.currentTimestamp))
  }

  translateToTime() {
    this.currentTime = this.format(parseInt(this.currentTimestamp));
  }

  translateToTimestamp() {
    this.currentTimestamp = (new Date(this.currentTime)).valueOf().toString();
  }
  private add0(m:number){
    return m < 10 ? '0' + m: m
  }
  private format(shijianchuo:number)
  {
    var time = new Date(shijianchuo);
    var y = time.getFullYear();
    var m = time.getMonth()+1;
    var d = time.getDate();
    var h = time.getHours();
    var mm = time.getMinutes();
    var s = time.getSeconds();
    return y + '-' + this.add0(m) + '-' + this.add0(d) + ' ' + this.add0(h) + ':' + this.add0(mm) + ':' + this.add0(s);
  }
}
