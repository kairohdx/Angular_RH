import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Vaga } from 'src/app/models/company/vaga';

interface Vagas extends Array<Array<Vaga>>{}

@Component({
  selector: 'app-lista-vagas',
  animations: [
    trigger('openClose', [
      // ...
      state('open', style({
        height: '*',
        opacity: 1,
      })),
      state('closed', style({
        height: '0px',
        opacity: 0.8,
      })),
      transition('open => closed', [
        animate('0.4s')
      ]),
      transition('closed => open', [
        animate('0.4s')
      ]),
    ]),
  ],
  templateUrl: './lista-vagas.component.html',
  styleUrls: ['./lista-vagas.component.css'],
})

export class ListaVagasComponent implements OnInit {

  public vagas = [
      <Vaga>{_id:1, status:0, name:'vaga statica 1', description:'Descrição da vaga setada em codigo para testes de visibilidade', in_charge:null, candidates:[], collaborators: [], tests:[], asked_by:null},
      <Vaga>{_id:1, status:0, name:'vaga statica 1', description:'Descrição da vaga setada em codigo para testes de visibilidade', in_charge:null, candidates:[], collaborators: [], tests:[], asked_by:null},
      <Vaga>{_id:1, status:0, name:'vaga statica 1', description:'Descrição da vaga setada em codigo para testes de visibilidade', in_charge:null, candidates:[], collaborators: [], tests:[], asked_by:null},
    
      <Vaga>{_id:1, status:1, name:'vaga statica 1', description:'Descrição da vaga setada em codigo para testes de visibilidade', in_charge:null, candidates:[], collaborators: [], tests:[], asked_by:null},
      <Vaga>{_id:1, status:1, name:'vaga statica 1', description:'Descrição da vaga setada em codigo para testes de visibilidade', in_charge:null, candidates:[], collaborators: [], tests:[], asked_by:null},
    
      <Vaga>{_id:1, status:2, name:'vaga statica 1', description:'Descrição da vaga setada em codigo para testes de visibilidade', in_charge:null, candidates:[], collaborators: [], tests:[], asked_by:null},
      <Vaga>{_id:1, status:2, name:'vaga statica 1', description:'Descrição da vaga setada em codigo para testes de visibilidade', in_charge:null, candidates:[], collaborators: [], tests:[], asked_by:null},
      <Vaga>{_id:1, status:2, name:'vaga statica 1', description:'Descrição da vaga setada em codigo para testes de visibilidade', in_charge:null, candidates:[], collaborators: [], tests:[], asked_by:null},
  ]

  
  public status = ['Solicitadas', 'Em Analise', 'Desativadas']
  public hideRuleContent:boolean[] = []
  public res:Vagas = <Vagas>[]

  constructor() {
   }

  ngOnInit(): void {
    this.vagas.reduce((acc, vaga:Vaga) => {
      if(!this.res[vaga.status]){
        this.res[vaga.status] = [];
        this.hideRuleContent[vaga.status] = true
      }
      this.res[vaga.status].push(vaga);
      return vaga;
    },{});
  }

  toggle(index:number){
    this.hideRuleContent[index] = !this.hideRuleContent[index]
  }

}
