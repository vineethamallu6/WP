import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegPageComponent } from './reg-page/reg-page.component';
import { LoginComponent } from './login/login.component';
import {MainpageComponent} from './mainpage/mainpage.component';
import { AppComponent } from './app.component';
import {ProductComponent} from './product/product.component';
import {FormsModule} from '@angular/forms';
import {CartComponent} from './product/cart/cart.component';
import {CheckoutComponent} from './product/checkout/checkout.component';
// import {CartComponent} from './product/cart/cart.component';
const routes: Routes = [
  {path:'mainpage',component:MainpageComponent},
  {path: 'reg-page', component:RegPageComponent},
  {path:'login', component:LoginComponent},
  {path:'product/:title',component:ProductComponent},
  {path:'cart',component:CartComponent},
  {path:'checkout', component:CheckoutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
