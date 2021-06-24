import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Field } from '../../models/field.interface';

@Component({
  selector: 'app-form-button',
  templateUrl: './form-button.component.html',
  styleUrls: ['./form-button.component.scss']
})
export class FormButtonComponent implements Field {
  config: any;
  group!: FormGroup;
}
