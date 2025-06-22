import { Routes } from "@angular/router";
import { AboutUsComponent } from "./about-us/about-us.component";
import { ProductsComponent } from "./products/products.component";
import { UnknownUrlComponent } from "./unknown-url/unknown-url.component";
import { ViewProductComponent } from "./view-product/view-product.component";


const routes : Routes = [
  {path: '', component: ProductsComponent},
  {path: 'about-us', component: AboutUsComponent},
  {
    path: 'my-profile',
    loadChildren : () => import('./my-profile/my-profile.module').then(m => m.MyProfileModule)
  },

  {path: 'unknown_url', component: UnknownUrlComponent},
  {path: 'view-product/:product_id', component: ViewProductComponent},
  {path: "**", redirectTo: 'unknown_url'} // wildcard route for unknown URls


]
export default routes;