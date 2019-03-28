import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-number',
  templateUrl: './number.component.html',
  styleUrls: ['./number.component.scss']
})
export class NumberComponent implements OnInit {
  private sourceItems = [
    {
      value: 'option1',
      text: '2进制',
      disabled: false
    },
    {
      value: 'option2',
      text: '8进制',
      disabled: false
    },
    {
      value: 'option3',
      text: '10进制',
      disabled: false
    },
    {
      value: 'option4',
      text: '16进制',
      disabled: false
    }
  ];
  private targetItems = [
    {
      value: 'option1',
      text: '2进制',
      disabled: true
    },
    {
      value: 'option2',
      text: '8进制',
      disabled: false
    },
    {
      value: 'option3',
      text: '10进制',
      disabled: false
    },
    {
      value: 'option4',
      text: '16进制',
      disabled: false
    }
  ];
  private sourceType:string;
  private sourceNumber:string;
  private targetType:string;
  private targetNumber:string;
  constructor() { }

  ngOnInit() {
    this.sourceType = "option1";
    this.targetType = "option2";
  }

  changeSource(item:any) {
    let needChangeTarget:boolean = false;
    if(item.value === this.targetType) {
      needChangeTarget = true;
    }
    this.targetItems.forEach((i) => {
      i.disabled = i.value === item.value;
      if(needChangeTarget) {
        if(i.value != this.targetType) {
          this.targetType = i.value;
          needChangeTarget = false;
        }
      }
    })
  }

  translate() {
    let sourceTransferNum:string = ''
    switch(this.sourceType) {
      case 'option1':
        sourceTransferNum = '2';
        break;
      case 'option2':
        sourceTransferNum = '8';
        break;
      case 'option4':
        sourceTransferNum = '16';
        break;
    }
    let targetTransferNum:string = ''
    switch(this.targetType) {
      case 'option1':
        targetTransferNum = '2';
        break;
      case 'option2':
        targetTransferNum = '8';
        break;
      case 'option4':
        targetTransferNum = '16';
        break;
    }
    this.targetNumber = targetTransferNum === '' ? 
      parseInt(this.sourceNumber, parseInt(sourceTransferNum)).toString():
      parseInt(this.sourceNumber, parseInt(sourceTransferNum)).toString(parseInt(targetTransferNum));
  }
}