import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-year',
  templateUrl: './year.component.html',
  styleUrls: ['./year.component.css']
})
export class YearComponent implements OnInit {
  start = 0;
  SpendenSumme: number[] = [2800, 4700, 4250]
  Year: string;

  @Input()
  set year(value: string) {
    this.Year = value;
  }
  get year() {
    return this.Year;
  }
  constructor() { }

  ngOnInit() {
    this.end = 100;
  }

}
