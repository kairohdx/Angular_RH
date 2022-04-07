import { Component, OnInit } from '@angular/core';
import { MyInput } from 'src/app/models/shared/my-input';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() {}

  i_email: MyInput  = {id: '', name:'', type: 'email', label: 'E-Mail', value: '' }
  i_pass: MyInput  = {id: '', name:'', type: 'password', label: 'Senha', value: '' }

  ngOnInit(): void {
  }

}
