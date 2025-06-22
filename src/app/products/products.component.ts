import { Component , Input } from '@angular/core';
import { products } from '../model/product_model';
import { ProductsService } from '../products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
//  @Input() myProducts: any;
// productservice = new ProductsService
// constructor (private productservice : ProductsService){
//   console.log(this.details);
// }

myProducts : any = [] ;

// myProducts = this.productservice.products

@Input() details : any = 0;

constructor (private productservice : ProductsService, private router:Router){
this.productservice.getProductsData().subscribe((products : any ) => {
  this.myProducts = products;
})
}

// productObs$ : any = this.productservice.getProductsData    using async but use for mostly static 

ShowProductData(){
  this.productservice.getProductsData().subscribe((products : any)=> {
    this.myProducts = products
  });
}

onClickdelete(product_id : number){
  this.productservice.deleteProductData(product_id).subscribe((data)=>{
    // console.log(data);
    this.ShowProductData();
  });
}


 ngOnInit() {
  // console.log(this.myProducts);
  // console.log(this.details);
  this.productservice.productsubject.subscribe((data)=>{
    console.log(data)
    this.ShowProductData();
  });

  this.ShowProductData();
 }



onclickimg( product_id : string){
  this.router.navigate(['view-product', product_id],{
    queryParams: {
      type: "costly"
    }
  });
} 

 ngdocheck(){

 }

}
