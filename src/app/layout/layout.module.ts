import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { AuthComponent } from './auth/auth.component';
import { DefaultComponent } from './default/default.component';
import { TopNavComponent } from './components/top-nav/top-nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProfileComponent } from '../views/auth/profile/profile.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { ScrollToTopComponent } from './components/scroll-to-top/scroll-to-top.component';

@NgModule({
  declarations: [
    AuthComponent,
    DefaultComponent, 
    TopNavComponent,
    FooterComponent,
    ProfileComponent,
    ScrollToTopComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    MatAutocompleteModule
  ]
})
export class LayoutModule { }
