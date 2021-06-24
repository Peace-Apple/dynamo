import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Field } from '../../models/field.interface';

@Component({
  selector: 'app-form-select',
  templateUrl: './form-select.component.html',
  styleUrls: ['./form-select.component.scss']
})
export class FormSelectComponent implements Field {
  config: any;
  group!: FormGroup;
}
