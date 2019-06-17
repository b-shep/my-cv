import { Component, OnInit } from '@angular/core';
import { Product } from "../../model/product.class";

@Component({
  selector: 'app-work-exp-comp',
  templateUrl: './work-exp-comp.component.html',
  styleUrls: ['./work-exp-comp.component.css']
})

export class WorkExpCompComponent implements OnInit {
  workExp:string = 'Nomadic Lifestyle Work Experience';
  hide: boolean = true;
  products: Product[] = [];

  logIt(){
    console.log("big log excreted");
  }

  constructor() { }

  ngOnInit() {
    //create 5 products
    //put them into products array
    let p1: Product = new Product(1, "beer01", "testes brew", 78.40);
    let p2: Product = new Product(2,"beer02", "double testes brew", 89.90);
    let p3: Product =  new Product(3, "frog09", "bambam", 78.90);
    let p4: Product = new Product(4, "beer4year", "tart testes", 65.82);
    let p5: Product = new Product(5, "burps09", "big burps", 834.80);
    this.products.push(p1,p2,p3,p4,p5);
  }

}
