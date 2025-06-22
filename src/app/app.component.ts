import { Component, computed, effect, signal } from '@angular/core';
import { products } from './model/product_model';
import { Observable, of } from 'rxjs';

// the interface is used to define the structure of the product object 

// componet directive
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ecommerce';
  name = ""

error = "";  
nameArr : any = [];
nameObservable$ = of('nilam', 'sanjana', 'ovee' , 'suraj', 'shubham');


counter = signal(0);
// constructor() {
//   console.log(this.counter());
// }

incrementCounter() {
  this.counter.update(value => {
    return ++value;
  });
}

decrementCounter() {
  this.counter.update(value => {
    return --value;
  });
}

firstName = signal("nilam");
lastName = signal("balugade");

fullName = computed(() => {
  return `${this.firstName()} ${this.lastName()}`;
});

constructor(){
  console.log(this.fullName());

  this.firstName.set("sanjana");

  console.log(this.fullName());

  effect (()=>{
    console.log( "the count is now chnaged " + this.counter());
  })
}




userdetails ={
  name3:"nilam",
  type: "customer",
  cart : 0,
}

// constructor() {
//   this.nameObservable$.subscribe((name : any) => {
//     this.nameArr.push(name);
//   })
// }

// constructor() {
//   const observables = new Observable((observer) =>{

//     observer.next(1);
//     observer.next(2);
//     // throw new Error("Error occurred");
//     observer.next(3);
//     observer.next(4);
//     observer.complete();

//   });
  // console.log([1,2,3,4]);

  // const observables = of(1,2,3,4,"nilam");

  // const arr = [1,2,3,4];
  
//   observables.subscribe((data) => {
//        console.log(data);
//   },
//   (err) => {
//     this.error = err;
//   },
//   () => {
//     console.log("my observable is complete");
//   }
// );

//   // observables.subscribe((data : any ) => {
//   //   console.log(data);
//   // })
// }

  
  // newProduct : products = {
  //   name2: "",
  //   description: "",
  //   price: 0,
  //   image: "../assets/images/tv.webp"
  // }

  // onSubmit(){
  //   this.products.push(this.newProduct)

  //   }




  // name2 = "iphone"
  // desciption = "Some quick example text to build on the card title and make up the bulk of the card's content."
  // price = 25


  // addProduct (data : products){
  //   this.products.push(data);
  // }


  // Use individual variables (e.g., iphone, samsung) when you need to handle specific, unique items separately.
  iphone: products = {
    name2: "iPhone",
    description: "A fast and powerful smartphone.",
    price: 25,
    image: "../assets/images/iphone.jpeg"
  };
  
  samsung : products = {
    name2: "Samsung Galaxy",
    description: "An Android phone with great features.",
    price: 30,
    image: "../assets/images/iphone.jpeg"
  };
  
  oneplus : products =  {
    name2: "OnePlus",
    description: "A smooth and stylish device.",
    price: 28,
    image: "../assets/images/iphone.jpeg"
  };
  
  
 
  onClickMe(){
    console.log("clicked me")
  }

  // counter = 0;
  // onClick(){
  //   this.counter++
  // }

  count=0;
  increment(){
    this.count++
  }
  decrement(){
      this.count--
  }


}
