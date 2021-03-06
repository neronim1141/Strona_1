
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module'; 
import { PublicRoutingModule} from './public-router.module';

import { SearchPipe } from '../shared/pipes/search.pipe';



import { HomeComponent } from './home/home.component';
import { FormularzComponent} from './formularz/formularz.component';
import { ContactComponent } from './contact/contact.component';
import{ LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    HomeComponent,
    ContactComponent,
    FormularzComponent,
    LoginComponent,
    SearchPipe,
],
  imports: [
    CommonModule,
    FormsModule,
    PublicRoutingModule,
    SharedModule,

 
  ],
  providers: [],
  bootstrap: []
})
export class PublicModule { }
