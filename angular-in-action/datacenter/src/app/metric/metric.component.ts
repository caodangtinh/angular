import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-metric',
  templateUrl: './metric.component.html',
  styleUrls: ['./metric.component.css']
})
export class MetricComponent implements OnInit {

  @Input('title') title = '';
  @Input('description') description = '';

  private _value = 0;
  @Input('used')
  set value(aValue: number) {
    if (isNaN(aValue)) {
      this._value = 0;
    }
    this._value = aValue;
  }

  get value() {
    return this._value;
  }

  private _max = 0;
  @Input('available')
  set max(aMax: number) {
    if (isNaN(aMax)) {
      this._max = 0;
    }
    this._max = aMax;
  }

  get max() {
    return this._max;
  }

  constructor() { }

  ngOnInit() {
  }

  isDanger(): boolean {
    return (this.value / this.max) > 0.7;
  }

}
