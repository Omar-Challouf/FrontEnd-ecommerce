import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 
import { ProductsComponent } from '../components/products/products.component';
import { ContactComponent } from '../components/contact/contact.component';
import { HomeComponent } from '../components/home/home.component';
import { ProductsDetailComponent } from '../components/products-detail/products-detail.component';
import { CategoryComponent } from '../components/category/category.component';
import { CartComponent } from '../components/cart/cart.component';
const routes: Routes = [
  { path: '' ,redirectTo: '/home', pathMatch: 'full'},
  { path :'home', component: HomeComponent},
  { path: 'products', component: ProductsComponent },
  { path: 'products/:id', component: ProductsDetailComponent },
  { path: 'contact', component: ContactComponent},
  { path: 'category/:id', component:CategoryComponent},
  { path: 'cart', component:CartComponent},
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
