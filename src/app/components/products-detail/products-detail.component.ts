import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';
import { CartService } from 'src/app/cart.service';

@Component({
  selector: 'app-products-detail',
  templateUrl: './products-detail.component.html',
  styleUrls: ['./products-detail.component.css']
})
export class ProductsDetailComponent implements OnInit {

  id;
  product;

  constructor(private router:ActivatedRoute, private productService: ProductsService, private carteService: CartService) { 
  }

  ngOnInit() {
      this.id = this.router.snapshot.params['id'];
      this.getProduct();
  }
 
  addToCart(product1)
  { console.log("bouton works")
    this.carteService.ajouterCarte(product1);
    console.log(this.carteService.getLeng());
  }

  getProduct() {
    this.product = this.productService.getProductById(this.id)
    .subscribe((res)=> this.product=res)
  }

}
