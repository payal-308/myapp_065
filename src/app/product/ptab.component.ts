import { Component } from '@angular/core';

@Component({
    selector:"ptab",
    templateUrl:'./ptab.component.html',
    styleUrls:['./ptab.component.css']

})
export class PtabComponent{
  name:string="Kishori";
  sal=23456;
  flag=false;

  parr=[{id:123,name:"Anil",desg:"CEO",dept:"KLFS"},
  {id:124,name:"Kishori",desg:"Manager",dept:"training"},
  {id:125,name:"Ashwini",desg:"Analyst",dept:"game"},
  {id:126,name:"Deepali",desg:"designer",dept:"UX"}];

  flag1=false; 
  p={id:123,name:"Priya",desg:"Programmer",dept:"inssurance"};
  myvar:number;
  changeFlag(){
     this.flag=!this.flag;
  }

}