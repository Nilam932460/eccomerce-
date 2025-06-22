import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  title = "E-commerce"
  isEnable=false
  search="";

  currentDate = new Date();

  onInput(event : any){
    // console.log(event.data)

    // this.search=event.data
    // console.log(this.search)

    if(event.data != null){
      this.search += event.data
    }
    console.log(this.search)
  }


}
