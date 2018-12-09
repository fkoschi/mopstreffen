import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-year-detail',
  templateUrl: './year-detail.component.html',
  styleUrls: ['./year-detail.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class YearDetailComponent implements OnInit {
  private _year: number;
  private _spendenSumme: number;
  private _videoUrl: string;
  @Input()
  set year(value: number) {
    this._year = value;
  }
  get year() {
    return this._year;
  }
  @Input()
  set summe(value: number) {
    this._spendenSumme = value;
  }
  get summe() {
    return this._spendenSumme;
  }
  @Input()
  set videoUrl(value: string) {
    this._videoUrl = value;
  }
  get videoUrl() {
    return this._videoUrl;
  }
  get sanitizedVideoUrl(): SafeUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(this._videoUrl);
  }
  constructor(public sanitizer: DomSanitizer) { }

  ngOnInit() {
  }
}
