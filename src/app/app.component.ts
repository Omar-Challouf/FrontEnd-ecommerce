import { Component } from '@angular/core';
import { ProductsService } from './services/products.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title: string = 'ecommerce';
  private categories;

  private products;

  constructor(private productsService: ProductsService) { }

  ngOnInit() {
     this.productsService.getProducts()
    .subscribe((res)=>this.products=res) 

    /* this.products = this.productsService.getProductsStatic(); */
    this.productsService.getCategory()
    .subscribe((res)=>this.categories=res)
  }
  





}
