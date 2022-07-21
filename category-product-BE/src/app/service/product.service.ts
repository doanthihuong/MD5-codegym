import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Product} from "../model/product";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  API='http://localhost:8085/api/products'


  constructor(private httpClient: HttpClient) { }

  findAll(): Observable<Product[]>{
    // @ts-ignore
    return this.httpClient.get(this.API);
  }

  save(product:Product): Observable<any> {
    return this.httpClient.post(this.API,product)
  }

}
