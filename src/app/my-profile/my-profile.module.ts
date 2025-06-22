import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddressesComponent } from '../addresses/addresses.component';
import { UserComponent } from '../user/user.component';
import { MyProfileComponent } from './my-profile.component';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from '../auth.guard';

const routes : Routes = [
  {path: '', component: MyProfileComponent,
    canActivate: [authGuard],
    children:[
      {path:'' ,redirectTo:'user',pathMatch:'full'},
      {path:'user',component: UserComponent},
      {path:'addresses',component: AddressesComponent},
    ],
  },
]

@NgModule({
  declarations: [
    UserComponent,
    AddressesComponent,
    MyProfileComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes) 
  ]
})
export class MyProfileModule { }
