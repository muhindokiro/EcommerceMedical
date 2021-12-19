
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';


const routes: Routes = [
    {
      path: '',
      redirectTo: '/login',
      pathMatch: 'full'
    },
    {
        path: '',
        children: [
          {
            path: 'login',
            component: LoginComponent,
                data: {returnUrl: window.location.pathname}
          },
          {
            path: 'register',
            component: RegisterComponent,
                data: {returnUrl: window.location.pathname}
          },
          {
            path: 'forgot-password',
            component: ForgotPasswordComponent,
                data: {returnUrl: window.location.pathname}
          }
        ]
    },
    { path: '**', redirectTo: '/login', pathMatch: 'full' }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class AuthRoutingModule { }