import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { AuthComponent } from './layout/auth/auth.component';
import { DefaultComponent } from './layout/default/default.component';

const moduleRoutes: Routes = [
  {
    path: 'home',
    // canActivate: [AuthGuard],
    loadChildren: () =>  import('./views/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'auth',
    // canActivate: [AuthGuard],
    loadChildren: () =>  import('./views/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'products',
    canActivate: [AuthGuard],
    loadChildren: () =>  import('./views/products/products.module').then(m => m.ProductsModule)
  },
]

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: '',
    component: DefaultComponent,
    children: moduleRoutes
  },
  
  // { 
  //   path: '**', 
  //   redirectTo: '/home', 
  //   pathMatch: 'full' 
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
