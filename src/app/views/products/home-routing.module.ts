import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProdPerCategComponent } from './prod-per-categ/prod-per-categ.component';

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
            path: 'category:id',
            component: ProdPerCategComponent,
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