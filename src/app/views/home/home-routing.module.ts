import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailsComponent } from '../product-details/product-details.component';
import { AddedCartComponent } from '../added-cart/added-cart.component';

const routes: Routes = [
    {
      path: '',
      redirectTo: '/home',
      pathMatch: 'full'
    },
    {
        path: '',
        children: [
          {
            path: '',
            component: HomeComponent,
                data: {returnUrl: window.location.pathname}
          },
          {
            path: 'productdata/:id',
            component: ProductDetailsComponent,
                data: {returnUrl: window.location.pathname}
          },
          {
            path: 'cart',
            component: AddedCartComponent,
                data: {returnUrl: window.location.pathname}
          }
        ]
    },
    { path: '**', redirectTo: '/home', pathMatch: 'full' }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class HomeRoutingModule { }