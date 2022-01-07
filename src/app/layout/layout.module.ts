import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
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
// import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';
import { SearchDataComponent } from './components/search-data/search-data.component';

@NgModule({
  declarations: [
    AuthComponent,
    DefaultComponent,
    TopNavComponent,
    FooterComponent,
    ProfileComponent,
    ScrollToTopComponent,
    SearchDataComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    FormsModule,
    // Ng2SearchPipeModule,
    MatAutocompleteModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class LayoutModule { }
