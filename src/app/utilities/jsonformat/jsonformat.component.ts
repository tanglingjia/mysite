import {FlatTreeControl} from '@angular/cdk/tree';
import { Component, OnInit } from '@angular/core';
import {MatTreeFlatDataSource, MatTreeFlattener} from '@angular/material/tree';

/**
 * Food data with nested structure.
 * Each node has a name and an optiona list of children.
 */
interface FoodNode {
  field?: string;
  value?: Object;
  childIndex?: string;
  children?: FoodNode[];
}

/** Flat node with expandable and level information */
interface ExampleFlatNode {
  expandable: boolean;
  field: string;
  value: Object;
  level: number;
}

@Component({
  selector: 'app-jsonformat',
  templateUrl: './jsonformat.component.html',
  styleUrls: ['./jsonformat.component.scss']
})
export class JsonformatComponent implements OnInit {
  private inputJson:string = ''
  private inputJsonException:string = ''
  private validJson:Object = ''

  private treeData: FoodNode[] = [
    // {
    //   field: 'Fruit',
    //   children: [
    //     {
    //       value: 'Apple',
    //       childIndex: '[0]'
    //     },
    //     {
    //       value: 'Banana',
    //       childIndex: '[1]'
    //     },
    //     {
    //       childIndex: '[2]',
    //       children: [
    //         {
    //           field: 'subitem1',
    //           value: "item1"
    //         },
    //         {
    //           field: 'subitem2',
    //           value: 1
    //         },
    //         {
    //           field: 'subitem3',
    //           value: false
    //         }
    //       ]
    //     },
    //   ]
    // },
    // {
    //   field: 'Vegetables',
    //   children: [
    //     {
    //       field: 'Green',
    //       children: [
    //         {
    //           value: 'Broccoli',
    //           childIndex: '[0]'
    //         },
    //         {
    //           value: 'Brussel sprouts',
    //           childIndex: '[1]'
    //         },
    //       ]
    //     }, 
    //     {
    //       field: 'num2',
    //       children: [
    //         {
    //           field: 'Pumpkins',
    //           value: 'Pumpkins1'
    //         },
    //         {
    //           field: 'Carrots',
    //           value: null
    //         },
    //       ]
    //     },
    //   ]
    // }
  ];

  private transformer = (node: FoodNode, level: number) => {
    let convertedValue;
    if(node.hasOwnProperty('value')) {
      switch(typeof(node.value)) {
        case "string":
          convertedValue = "\"" + node.value + "\"";
          break;
        case "number":
          convertedValue = node.value;
          break;
        case "boolean":
          convertedValue = node.value ? 'true' : 'false';
          break;
        case "object":
          convertedValue = 'null';
          break;
        default:
          break;
      }
    }
    return {
      expandable: !!node.children && node.children.length > 0,
      field: node.field,
      value:  convertedValue,
      childIndex: node.childIndex,
      childType: typeof(node.value),
      level: level
    };
  }

  treeControl = new FlatTreeControl<ExampleFlatNode>(
      node => node.level, node => node.expandable);

  treeFlattener = new MatTreeFlattener(
      this.transformer, node => node.level, node => node.expandable, node => node.children);

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);
  constructor() {
    this.dataSource.data = [];
  }

  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;

  ngOnInit() {
  }

  changeInput() {
    if(this.inputJson !== '') {
      this.toJSON(this.inputJson);
    } else {
      this.dataSource.data = [];
      this.inputJsonException = '';
    }
  }

  private toJSON(str) {
    if (typeof str == 'string') {
      try {
        var obj = JSON.parse(str);
        if(typeof obj == 'object' && obj ){
          this.validJson = obj;
          let jsonTree:FoodNode[] = [];
          this.convertJsonDataToTree(this.validJson, jsonTree);
          this.dataSource.data = jsonTree;
          console.log(jsonTree);
          this.inputJsonException = ''
        }else{
          this.inputJsonException = obj;
        }
      } catch(e) {
        this.inputJsonException = e;
      }
    }
    return str;
  }

  // 递归将json数组或对象放入树结构中
  private convertJsonDataToTree(obj, tree) {
    if(obj instanceof Array) {
      for(var i = 0; i < obj.length; i++) {
        if(obj[i] === null || typeof(obj[i]) !== 'object') {
          tree.push({value: obj[i], childIndex: '[' + i + ']'});
        } else {
          var currentChildren = []
          this.convertJsonDataToTree(obj[i], currentChildren);
          tree.push({children: currentChildren, childIndex: '[' + i + ']'});
        }
      }
    } else {
      Object.keys(obj).forEach(key => {
        if(obj[key] === null || typeof(obj[key]) !== 'object') {
          tree.push({value: obj[key], field: key});
        } else {
          var currentChildren = []
          this.convertJsonDataToTree(obj[key], currentChildren);
          tree.push({children: currentChildren, field: key});
        }
      })
    }
  }

}
