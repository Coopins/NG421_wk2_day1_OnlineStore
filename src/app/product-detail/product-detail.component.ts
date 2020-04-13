import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IProduct } from '../models/iproduct';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {


@Input() product: IProduct;

@Output() productAdded = new EventEmitter <IProduct>();

  constructor() { }

  ngOnInit() {
  }

  productBuy() {
    this.productAdded.emit(this.product);
    console.log(this.product);
  }



}
