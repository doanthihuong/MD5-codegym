import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

import {ProductService} from "../../service/product.service";
import {CategoryService} from "../../service/category.service";
import {Category} from "../../model/Category";
import {FormControl, FormGroup} from "@angular/forms";

import {Product} from "../../model/Product";

@Component({
  selector: 'app-list-product-backend',
  templateUrl: './list-product-backend.component.html',
  styleUrls: ['./list-product-backend.component.css']
})
export class ListProductBackendComponent implements OnInit {
  productForm: FormGroup = new FormGroup({
    name: new FormControl('')
  })
nameC:any;
  from: any;
  to: any
  // @ts-ignore
  listProduct: Product[];
  listCategory: Category[] = [];

  constructor(private httpCline: HttpClient,
              private productBeService: ProductService,
              private categoryService: CategoryService) {
  }

  ngOnInit(): void {
    this.getAll();
    this.getCategory()

  }

  getCategory() {
    this.categoryService.findAll().subscribe((data) => {
      this.listCategory = data;
    });
  }

  getAll() {
    this.productBeService.findAll().subscribe((data) => {
      console.log(data)
      this.listProduct = data;
    }, error => {
      console.log(error)
    })
  }

  searchByName() {
    const name = this.productForm.value.name;
    this.productBeService.searchByName(name).subscribe((data) => {
      console.log(data)
      this.listProduct = data;
    }, error => {
      console.log(error)
    })

  }

  searchByPriceBetween() {

    this.productBeService.searchByPriceBetween(this.from,this.to).subscribe(data => {
      this.listProduct = data;
      console.log(data)
    }, error => {
      console.log(error)
    })
  }

  searchByCategoryName(){

    this.productBeService.searchByCategoryName(this.nameC).subscribe((data) => {
      console.log(data)
      this.listProduct = data;
    }, error => {
      console.log(error)
    })
  }
}
