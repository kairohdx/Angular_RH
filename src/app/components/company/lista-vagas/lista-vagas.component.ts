import { Component, OnInit } from '@angular/core';
import { Vaga } from 'src/app/models/company/vaga';

@Component({
  selector: 'app-lista-vagas',
  templateUrl: './lista-vagas.component.html',
  styleUrls: ['./lista-vagas.component.css']
})
export class ListaVagasComponent implements OnInit {

  vagas = [
      <Vaga>{_id:1, status:0, name:'vaga statica 1', description:'Descrição da vaga setada em codigo para testes de visibilidade', in_charge:null, candidates:[], collaborators: [], tests:[], asked_by:null},
      <Vaga>{_id:1, status:0, name:'vaga statica 1', description:'Descrição da vaga setada em codigo para testes de visibilidade', in_charge:null, candidates:[], collaborators: [], tests:[], asked_by:null},
      <Vaga>{_id:1, status:0, name:'vaga statica 1', description:'Descrição da vaga setada em codigo para testes de visibilidade', in_charge:null, candidates:[], collaborators: [], tests:[], asked_by:null},
    
      <Vaga>{_id:1, status:1, name:'vaga statica 1', description:'Descrição da vaga setada em codigo para testes de visibilidade', in_charge:null, candidates:[], collaborators: [], tests:[], asked_by:null},
      <Vaga>{_id:1, status:1, name:'vaga statica 1', description:'Descrição da vaga setada em codigo para testes de visibilidade', in_charge:null, candidates:[], collaborators: [], tests:[], asked_by:null},
    
      <Vaga>{_id:1, status:2, name:'vaga statica 1', description:'Descrição da vaga setada em codigo para testes de visibilidade', in_charge:null, candidates:[], collaborators: [], tests:[], asked_by:null},
      <Vaga>{_id:1, status:2, name:'vaga statica 1', description:'Descrição da vaga setada em codigo para testes de visibilidade', in_charge:null, candidates:[], collaborators: [], tests:[], asked_by:null},
      <Vaga>{_id:1, status:2, name:'vaga statica 1', description:'Descrição da vaga setada em codigo para testes de visibilidade', in_charge:null, candidates:[], collaborators: [], tests:[], asked_by:null},
  ]
  status = ['Desativadas', 'Em Analise', 'Solicitadas']

  

  constructor() { }

  ngOnInit(): void {
  }

}
