import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomPipe } from './custom.pipe';
import { AddProductComponent } from './add-product/add-product.component';
import { ProductsComponent } from './products/products.component';
import { HttpClientModule } from '@angular/common/http';
import { AboutUsComponent } from './about-us/about-us.component'; 
import { RouterModule, Routes } from '@angular/router';
import { UnknownUrlComponent } from './unknown-url/unknown-url.component';
import { authGuard } from './auth.guard';
import { ViewProductComponent } from './view-product/view-product.component';
import routes from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CustomPipe,
    AddProductComponent,
    ProductsComponent,
    AboutUsComponent,
    UnknownUrlComponent,
    ViewProductComponent,  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes) 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
