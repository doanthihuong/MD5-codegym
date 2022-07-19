import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../service/product.service";
import {Product} from "../../model/product";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  //khai báo  một đối tượng product
  products: Product[] = [];
  //khai báo một đối tượng productService trong constructor
  constructor(private productService:ProductService) { }
  //gọi phương thức getAll() trong onInit
  ngOnInit(): void {
    this.getAll();
  }
//tạo getAll()
  getAll(){
    this.products=this.productService.getAll();
  }
}
