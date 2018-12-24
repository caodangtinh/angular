import { Component, OnInit, OnDestroy } from '@angular/core';
import { Metric } from '../model/metric';
import { Node } from '../model/node';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnDestroy {
  cpu: Metric;
  mem: Metric;
  cluster1: Node[];
  cluster2: Node[];
  interval: any;

  constructor() { }

  ngOnInit(): void {
    this.generateData();
    this.interval = setInterval(() => {
      this.generateData();
    }, 15000);
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }


  generateData(): void {
    this.cluster1 = [];
    this.cluster2 = [];
    this.cpu = { used: 0, available: 0 };
    this.mem = { used: 0, available: 0 };
    for (let i = 1; i < 4; i++) {
      this.cluster1.push(this.randomNode(i));
    }
    for (let i = 4; i < 7; i++) {
      this.cluster2.push(this.randomNode(i));
    }
  }

  private randomNode(i: number): Node {
    const node = {
      name: 'node ' + i,
      cpu: { used: this.randomInteger(0, 16), available: 16 },
      mem: { used: this.randomInteger(0, 48), available: 48 }
    };
    this.cpu.used += node.cpu.used;
    this.cpu.available += node.cpu.available;
    this.mem.used += node.mem.used;
    this.mem.available += node.mem.available;
    return node;
  }

  private randomInteger(min: number = 0, max: number = 100): number {
    return Math.floor(Math.random() * max) + 1;
  }

}
