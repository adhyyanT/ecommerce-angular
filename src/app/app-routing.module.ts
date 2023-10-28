import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { ProductComponent } from './pages/product/product.component';
import { LoginComponent } from './pages/login/login.component';
import { AuthGuard } from './guard/auth.guard';
import { ProductsComponent } from './components/products/products.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', canActivate: [AuthGuard], component: HomeComponent },
  {
    path: 'product/:productId',
    canActivate: [AuthGuard],
    component: ProductComponent,
  },
  { path: 'checkout', canActivate: [AuthGuard], component: CheckoutComponent },
  { path: '', component: LoginComponent, pathMatch: 'full' },
];
// https://fakestoreapi.com/docs
// https://daisyui.com/docs/install/
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
