import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
// @ts-ignore
import {Product} from "../model/Product";
const API = 'http://localhost:8085/api/products';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  API = 'http://localhost:8085/api/products'

  constructor(private httpClient : HttpClient) { }

  findAll(): Observable<Product[]>{
      // @ts-ignore
    return this.httpClient.get(API);
  }

  save(product:Product): Observable<any> {
    return this.httpClient.post(API,product)
  }

  getById(id: any): Observable<Product> {
    return this.httpClient.get<Product>(API + `/${id}`);
  }
  edit(id: number, product: Product): Observable<Product> {
    return this.httpClient.put<Product>(`${this.API}/${id}`, product);
  }
  delete(id: number): Observable<Product> {
    return this.httpClient.delete<Product>(API + `/${id}`);
  }
  searchByName(name:string) : Observable<Product[]> {
    return this.httpClient.get<Product[]>(API + `/search-by-name?name=${name}`);
  }
  searchByPriceBetween(from:any,to:any) : Observable<Product[]>{
    return  this.httpClient.get<Product[]>(API+`/by-price-between?from=`+from+'&to='+to)
  }

  searchByCategoryName(nameC:string) : Observable<Product[]> {
    return this.httpClient.get<Product[]>(API + `/search-by-categoryName?nameC=${nameC}`);
  }


}
