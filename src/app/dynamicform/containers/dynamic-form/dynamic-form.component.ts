import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss']
})
export class DynamicFormComponent implements OnInit {
  @Input()
  config: any[] = [];

  @Output()
  submitted: EventEmitter<any> = new EventEmitter<any>();

  form!: FormGroup;
  userGroup: any = {};

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.createGroup();
  }

  createGroup() {
    for(let config of this.config){
      this.userGroup[config.name] = new FormControl(config.value || '')
    }
    this.form = new FormGroup(this.userGroup);
  }
}
