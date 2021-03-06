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
    let myView = CodeMirror.MergeView(target, {
      value: '',
      origLeft: '',
      lineNumbers: true,
      allowEditingOriginals: true
    });
    myView.left.orig.doc.setValue('123');
    myView.edit.doc.setValue('abc');
  }
  
  constructor() {}

  ngOnInit() {
    this.initUI();
  }
}
