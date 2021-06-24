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
    // const group = this.fb.group({});
    console.log('za config-------', this.config)
    // this.config?this.config.forEach(control =&gt; group.addControl(control.name, this.fb.control())) : null;

    // return group;
    for(let config of this.config){
      this.userGroup[config.name] = new FormControl(config.value || '')
    }
    console.log('the user grup-------', this.userGroup)
    this.form = new FormGroup(this.userGroup);
    console.log('form vals--------', this.form.value)
  }
}
