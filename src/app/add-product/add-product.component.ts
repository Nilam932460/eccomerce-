import { Component, Output, EventEmitter } from '@angular/core';
import { products } from '../model/product_model';
import { ProductsService } from '../products.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { forbiddenWordsValidator } from '../validators/forbidden-words.validator';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
})
export class AddProductComponent {
  // reactive form 
  productForm: FormGroup;

  submitted = false;

  isSubmitting = false;

  // newProduct : products = {
  //     name2: "",
  //     description: "",
  //     price: 0,
  //     image: "../assets/images/tv.webp"
  //   }

  // constructor(private productservice: ProductsService) {
  //   this.productForm = new FormGroup({
  //     name: new FormControl('', [Validators.required, Validators.minLength(4), forbiddenWordsValidator()]),
  //     description: new FormControl(''),
  //     price: new FormControl(''),
  //   });
  // }
  // -----------------------------------------------------------------------------------------
  
  // shortcut for reactive form
constructor(private productservice: ProductsService , private fb : FormBuilder) {
    this.productForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(4), forbiddenWordsValidator()]],
      description: [''],
      price: [''],
    });
  }

  // -----------------------------------------------------------------------------------------------
  // @Output() productEmitter = new EventEmitter();
  // onSubmit(productForm: any) {
  //   if (productForm.form.status === 'VALID') {
  //     this.isSubmitting = true;
  //     this.productservice.postProductData(this.newProduct).subscribe({
  //       next: (data) => {
  //         this.productservice.productsubject.next(true);
  //         this.isSubmitting = false;
  //         productForm.resetForm();  ``

  //       },
  //       error: (error) => {
  //         console.error("Error adding product:", error);
  //         this.isSubmitting = false;
  //       }
  //     });
  //   } else {
  //     console.log("Form is invalid");
  //   }
  // }
  // -----------------------------------------------------------------------------------------------

  get name() {
    return this.productForm.get('name');
  }

  // what we do in onsubmit is we check if the form is valid or not
  // if it is valid we emit the newProduct object to the parent component
  // if it is not valid we log the form is not valid
  onSubmit() {
    console.log("test");
    
    // this.productEmitter.emit(this.newProduct)

    // console.log(this.newProduct);
    // // this.productservice.products.push(this.newProduct);
    // this.productservice.postProductData(this.newProduct).subscribe((data) => {
    //   console.log(data);
    //   this.productservice.productsubject.next(true);
    // });
    // ----------------------------------------------------------------------------------------
    if (this.productForm.status === 'VALID') {
      this.productservice.postProductData(this.productForm.value).subscribe({
        next: (data) => {
          this.productservice.productsubject.next(true);
        },
        error: (error) => {
          console.log('error adding product:', error);
        },
      });
    } else {
      console.log('form is not valid');
    }
    // -----------------------------------------------------------------------------------------
  }
}
