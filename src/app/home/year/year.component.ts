import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-year',
  templateUrl: './year.component.html',
  styleUrls: ['./year.component.css']
})
export class YearComponent implements OnInit {
  SpendenSumme: number[] = [2800, 4700, 4250 ];
  Videos: string[] = ['https://www.youtube.com/embed/C-tZtfLcXQo', '', 'https://www.youtube.com/embed/8F1SjW498LE'];
  Year: number;

  @Input()
  set year(value: number) {
    this.Year = value;
  }
  get year() {
    return this.Year;
  }
  constructor() {}

  ngOnInit() {
  }
}
