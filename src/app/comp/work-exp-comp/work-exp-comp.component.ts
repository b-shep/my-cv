import { Component, OnInit } from '@angular/core';
import { Product } from "../../model/product.class";

@Component({
  selector: 'app-work-exp-comp',
  templateUrl: './work-exp-comp.component.html',
  styleUrls: ['./work-exp-comp.component.css']
})
export class WorkExpCompComponent implements OnInit {
  workExp:string = 'Nomadic Lifestyle Work Experience';
  display: boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
