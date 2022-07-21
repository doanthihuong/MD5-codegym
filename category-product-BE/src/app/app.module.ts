import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import { ListProductComponent } from './product/list-product/list-product.component';
import { CreateProductComponent } from './product/create-product/create-product.component';
import {ReactiveFormsModule} from "@angular/forms";
import { ListCategoryComponent } from './category/list-category/list-category.component';
import { DeleteProductComponent } from './product/delete-product/delete-product.component';



// @ts-ignore
@NgModule({
  declarations: [
    AppComponent,
    ListProductComponent,
    CreateProductComponent,
    ListCategoryComponent,
    DeleteProductComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //import httpclient để kết nối backend
    HttpClientModule,
    //import reactiveFormModule để dùng form
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
