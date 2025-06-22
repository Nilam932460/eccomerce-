import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { ProductsService } from './products.service';

export const authGuard: CanActivateFn = (route, state) => {
  const productsService = inject(ProductsService);

  if(productsService.isLogin){
    return true;
  }
  alert("Please login for accessing this pagae")
  return false;
};
