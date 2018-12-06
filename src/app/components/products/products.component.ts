import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  private products;

  constructor(private productsService: ProductsService) { }

  ngOnInit() {
/*     this.products = this.productsService.getProducts().subscribe((res)=>this.products=res)
 */  }
  

}
