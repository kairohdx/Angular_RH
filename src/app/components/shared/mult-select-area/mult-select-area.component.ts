import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MultSelect } from 'src/app/models/shared/mult-select';
import { MyInput } from 'src/app/models/shared/my-input';

@Component({
  selector: 'app-mult-select-area',
  animations: [
    trigger('selected', [
      state('true', style({width:'*'})),
      state('false', style({ width:'0px'})),
      transition('false <=> true', animate(200))
    ]),
    trigger('showHideOptions', [
      state('true', style({height:"*"})),
      state('false', style({height:"0px"})),
      transition('false <=> true', animate(200))
    ])
  ],
  templateUrl: './mult-select-area.component.html',
  styleUrls: ['./mult-select-area.component.css']
})
export class MultSelectAreaComponent implements OnInit {

  @Input() 
  list_options:MultSelect[] = []

  @Output()
  conluded = new EventEmitter<boolean>()

  public list_list_options:[MultSelect[]] = [[]]

  public list_selecteds:MultSelect[] = []

  public list_unselecteds:MultSelect[] = []

  public unselecteds_visible:boolean = false

  public confirm_selecteds:boolean = false

  constructor() { }

  ngOnInit(): void {
    this.load_lists()
    this.split_options(5)
  }

  toogle_selection(option:MultSelect){
    option.checked = !option.checked
    option.checked && this.load_lists()
  }

  show_hide_options(){
    this.unselecteds_visible = !this.unselecteds_visible
  } 

  load_lists(){
    let aux_list = this.list_options.filter((opt)=>{return opt.checked})
    let aux_opt = aux_list.filter((opt)=>{return this.list_selecteds.indexOf(opt) === -1 ? true : false})[0]
    
    aux_opt ? this.list_selecteds.push(aux_opt) : this.list_selecteds = this.list_selecteds.filter((opt)=>{return opt.checked})
  }

  toogle_confirm(){
    this.confirm_selecteds = !this.confirm_selecteds
    this.conluded.emit(this.confirm_selecteds)
  }

  load_input_from_option(opt:MultSelect){
    let input:MyInput = {id:'attr'+opt.id, name:'attr'+opt.id, type:opt.type, value:'', label:opt.text,}
    return input
  }

  split_options(size:number){
    for(let i = 0; i < this.list_options.length; i += size){
      let min_arr:MultSelect[] = this.list_options.slice(i, i+size)
      this.list_list_options.push(min_arr)
    }
  }


}
