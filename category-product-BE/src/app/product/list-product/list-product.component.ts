import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {FormControl, FormGroup} from "@angular/forms";
import {ProductService} from "../../service/product.service";
import {CategoryService} from "../../service/category.service";
import {Category} from "../../model/category";
import {error} from "@angular/compiler-cli/src/transformers/util";

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {
   productForm:FormGroup=new FormGroup(
     {
       name:new FormControl(''),
       price : new FormControl(''),
       category: new FormControl('')
     }
   )
  listProduct:any;
   listCategory: Category[]=[];
  constructor(private httpClient: HttpClient,
              private productService: ProductService,
              private  categoryService: CategoryService) { }

  ngOnInit(): void {
this.getAll();
this.getCategory()
}
getCategory(){
  this.categoryService.findAll().subscribe((data)=>{
    this.listCategory=data;
  })}
  getAll(){
    this.productService.findAll().subscribe((data)=>{
      console.log(data)
      this.listProduct=data;
    },error=>{
      console.log(error)
    })
  }
  searchByName() {
    const name = this.productForm.value.name;
    this.productService.searchByName(name).subscribe((data) => {
      console.log(data)
      this.listProduct=data;
    },error=>{
      console.log(error)
    })
  }
}
