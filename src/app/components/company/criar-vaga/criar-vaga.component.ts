import { Component, OnInit } from '@angular/core';
import { MultSelect } from 'src/app/models/shared/mult-select';

@Component({
  selector: 'app-criar-vaga',
  templateUrl: './criar-vaga.component.html',
  styleUrls: ['./criar-vaga.component.css']
})
export class CriarVagaComponent implements OnInit {

  public options:MultSelect[] = [
    <MultSelect>{id:1, text:'Primeiro Atributo', checked:false, type:'text'},
    <MultSelect>{id:2, text:'Segundo Atributo', checked:false, type:'email'},
    <MultSelect>{id:3, text:'Terceiro Atributo', checked:false, type:'number'},
  ]

  public options_concluded:boolean = false
  
  constructor() { }

  ngOnInit(): void {
  }

  submit(){
  }

  onConcluded(ev:boolean){
    this.options_concluded = ev
  }

}
