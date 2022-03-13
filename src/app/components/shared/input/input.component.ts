import { Component, Input, OnInit } from '@angular/core';
import { MyInput } from 'src/app/models/shared/my-input';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})

export class InputComponent implements OnInit {

  constructor() {}

  @Input() 
  input_sets: MyInput = {
    id: '',
    type: 'text',
    label: '',
    value: ''
};

  ngOnInit(): void {
  }

  onFocus(){}

  onBlur(){}


}

