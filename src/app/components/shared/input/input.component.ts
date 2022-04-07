import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, ValidatorFn, Validators } from '@angular/forms';
import { MyInput } from 'src/app/models/shared/my-input';

@Component({
  selector: 'app-input',
  animations: [
    trigger('inside', [
      state('true', style({ bottom: '-25px'})),
      state('false', style({ bottom:'0px'})),
      transition('false <=> true', animate(300))
    ])
  ],
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})

export class InputComponent implements OnInit {

  private validator:ValidatorFn[] = []
  public input:FormControl = new FormControl('');
  public label_trigger:Boolean = true

  constructor() {
    this.load_input()
  }

  @Input() 
  public input_sets: MyInput = {
    id: '',
    name: '',
    type: '',
    label: '',
    value: ''
};

  

  ngOnInit(): void {
  }

  load_input(){
    this.validator = [Validators.required]
    this.input_sets.type === 'email' && this.validator.push(Validators.email)
    this.input = new FormControl(this.input_sets.value, { updateOn: 'blur', validators: this.validator })
  }

  onFocus(){
    this.label_trigger = false
  }

  onBlur(){
    this.label_trigger = this.input.value.trim().length === 0 ? true : false
  }



}

