import { Component } from '@angular/core';
import { ProductsService } from '../products.service';
import { ActivatedRoute } from '@angular/router';
import { products } from '../model/product_model';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent {

  constructor(private productservice: ProductsService, private router: ActivatedRoute){}

  product : products = {
    name2:'',
    description: '',
    price : 0

  }

isCostly : boolean = false;

   ngOnInit(){

    this.router.queryParams.subscribe((query : any) => {
      if(query.type === 'costly'){
        this.isCostly = true;
      }

    })

    this.router.params.subscribe((params : any) => {

      this.productservice.getsingleproduct(params.product_id).subscribe
      ((product : any) => {
        this.product = product;
      });

    })

    }
  }


