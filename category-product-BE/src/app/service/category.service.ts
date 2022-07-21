import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Category} from "../model/category";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  API_CA ='http://localhost:8080/api/categorys' ;

  findAll(): Observable<Category[]>{
    // @ts-ignore
    return this.httpClient.get(this.API_CA);
  }

  save(category:Category): Observable<any> {
    return this.httpClient.post(this.API_CA,category)
  }
  constructor(private httpClient: HttpClient) { }
}
