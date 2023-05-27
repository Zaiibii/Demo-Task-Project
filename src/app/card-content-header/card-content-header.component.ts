import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-content-header',
  templateUrl: './card-content-header.component.html',
  styleUrls: ['./card-content-header.component.css']
})
export class CardContentHeaderComponent{
  arr :any[] = new Array(5);


  // ngOnInit(){
  //   this.arr = new Array
  // }
  add(val:number,active:any){
    this.arr = new Array(val);
    this.active = active;
  }

  active:number=0;
 
}
