import { Component, OnInit } from '@angular/core';

import { FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  email = new FormControl('', [Validators.required, Validators.email]);

  constructor() {}

  ngOnInit() {}

  getErrorMessage() {
    return this.email.hasError('required')
      ? 'Bitte eine E-Mail eingeben'
      : this.email.hasError('email')
        ? 'Keine gültige E-Mail'
        : '';
  }
}
