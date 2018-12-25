import { Component, OnInit, Input } from '@angular/core';
import { Node } from '../model/node';

@Component({
  selector: '[app-nodes-row]',
  templateUrl: './nodes-row.component.html',
  styleUrls: ['./nodes-row.component.css']
})
export class NodesRowComponent implements OnInit {

  @Input('node') node: Node;
  constructor() { }

  ngOnInit() {
  }

  isDanger(prop: string): boolean {
    return this.node[prop].used / this.node[prop].available > 0.7;
  }

}
