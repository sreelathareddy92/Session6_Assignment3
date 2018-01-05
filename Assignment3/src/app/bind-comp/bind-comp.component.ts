/**
 * @component [BindCompComponent]
 * @param {string} [firstName]
 * @param {string} [lastName]
 * @param {string} [title]
 */

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bind-comp',
  templateUrl: './bind-comp.component.html',
  styleUrls: ['./bind-comp.component.css']
})
export class BindCompComponent implements OnInit {
//public variables
  firstName : string;
  lastName : string;
  title : string;

  constructor() { }

  ngOnInit() {
    this.firstName = "Sreelatha";
    this.lastName = "Nalagari";
  }
  // @function onSubmit()
  onSubmit(val1,val2)
  {
    val1 = this.firstName;
    val2=this.lastName;
    console.log(this.title = "You Can Win "+val1+" "+val2);  
  }

}
