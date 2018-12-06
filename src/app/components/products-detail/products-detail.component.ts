import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products-detail',
  templateUrl: './products-detail.component.html',
  styleUrls: ['./products-detail.component.css']
})
export class ProductsDetailComponent implements OnInit {

  id;
  product;

  constructor(private router:ActivatedRoute, private productService: ProductsService) { 
  }

  ngOnInit() {
      this.id = this.router.snapshot.params['id'];
      console.log(this.id)
      this.getProduct();
  }

  getProduct() {
    this.product = this.productService.getProductById(this.id)
    .subscribe((res)=> this.product=res)
  }

}
