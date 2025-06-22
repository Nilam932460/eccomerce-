import { Injectable } from '@angular/core';
import { products } from './model/product_model';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  public isLogin = true;

private URL = "https://68206cbf259dad2655ac8220.mockapi.io/products";
public productsubject = new Subject();
    // Use an array (e.g., products[]) when you want to loop through multiple similar items, like a list of products.
    products : products[] = [];

   constructor(private http: HttpClient) {}

    getProductsData(){
      return this.http.get(this.URL);
    }

    postProductData(product : products){
      return this.http.post(this.URL, {...product, image: "../assets/images/tv.webp",});
    }

    deleteProductData(id : number){
      return this.http.delete(this.URL + "/" + id);
    }

    getsingleproduct(product_id : string){
      return this.http.get(this.URL + "/" + product_id);
    } 
}
