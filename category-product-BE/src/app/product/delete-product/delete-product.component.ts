import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.css']
})
export class DeleteProductComponent implements OnInit {
  form: FormGroup = new FormGroup({
    name: new FormControl(''),
    price : new FormControl(''),
    categoryId: new FormControl('')
  })
  id: any;

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {

  }

}
