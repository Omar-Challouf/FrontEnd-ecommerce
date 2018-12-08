import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';
import { CartService } from 'src/app/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  id;
  products;
  total=0;
  constructor(private router:ActivatedRoute, private productService: ProductsService, private carteService : CartService) { }

  ngOnInit() {
    this.id = this.router.snapshot.params['id'];
    console.log(this.id)
    this.getProduct();
    for (let index = 0; index < this.products.length; index++) {
      this.total=this.total+this.products[index].prix;
    }
  }
  getProduct() {
    /* console.log(this.carteService.getProduit()); */
    this.products = this.carteService.getProduit();

  }
  vide()
  { console.log("works");
    this.carteService.vider();
  }
  
}
