/// <reference types="@types/googlemaps" />
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  @ViewChild('gmaps') gmapElement: any;
  
  lat: number = 51.678418;
  lng: number = 7.809007;
  style: object[] = [
    {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
    {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
    {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
  ]

  email = new FormControl('', [Validators.required, Validators.email]);

  constructor() {}

  ngOnInit() {
  }

  getErrorMessage() {
    return this.email.hasError('required')
      ? 'Bitte eine E-Mail eingeben'
      : this.email.hasError('email')
        ? 'Keine gültige E-Mail'
        : '';
  }
}
