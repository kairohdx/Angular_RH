import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Vaga } from 'src/app/models/company/vaga';

interface Vagas extends Array<Array<Vaga>>{}

@Component({
  selector: 'app-lista-vagas',
  templateUrl: './lista-vagas.component.html',
  styleUrls: ['./lista-vagas.component.css'],
  animations: [
    trigger('flyInOut', [
      state('in', style({ transform: 'translateX(0)' })),
      transition('void => *', [
        style({ transform: 'translateX(-100%)' }),
        animate(100)
      ]),
      transition('* => void', [
        animate(100, style({ transform: 'translateX(100%)' }))
      ])
    ])
  ],
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
  public hideRuleContent:boolean[] = [];
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
