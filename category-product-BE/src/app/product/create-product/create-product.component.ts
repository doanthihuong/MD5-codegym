import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {HttpClient} from "@angular/common/http";

import {Category} from "../../model/category";
import {Observable} from "rxjs";

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {
form =new FormGroup({
  name:new FormControl(''),
  price:new FormControl(''),
  category:new FormControl('')

});
obj:any;
  list_category: any;
  private data: any;
  private router: any;
  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.httpClient.get('http://localhost:8085/api/categorys').subscribe((categories) => {
      this.list_category = categories;
    })
  }
add(){
    this.obj={
      name:this.form.value.name,
      price:this.form.value.price,
      category: {
        id: this.form.value.category
      }
    }
    console.log(this.obj);
}

  save(): Observable<any> {
    this.add()
    // @ts-ignore
    return this.httpClient.post('http://localhost:8085/api/products', this.obj).subscribe((data)=>{
      alert('thanh cong')
      this.obj=data;
      this.router.navigate(['product'])
    },error => {
      alert('loi roi')
    });
  }

}
