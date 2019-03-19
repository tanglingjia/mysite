import { Component, OnInit } from '@angular/core';
import * as CodeMirror from 'codemirror';
import 'codemirror/addon/merge/merge.js';
import '../../../assets/diff_match_patch.js';


@Component({
  selector: 'app-compare',
  templateUrl: './compare.component.html',
  styleUrls: ['./compare.component.scss']
})
export class CompareComponent implements OnInit {
  initUI() {
    const target = document.getElementById("compare");
    CodeMirror.MergeView(target, {
      value: '',
      origLeft: '',
      lineNumbers: true,
      allowEditingOriginals: true
    });
  }
  
  constructor() {}

  ngOnInit() {
    this.initUI();
  }
}
