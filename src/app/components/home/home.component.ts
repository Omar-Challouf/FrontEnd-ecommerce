import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  products:any;

  constructor(private productsService: ProductsService) { }

  ngOnInit() {

    this.getProduct()

}
getProduct(){

  this.productsService.getProducts()
  .subscribe( (res) =>this.products = res) 
}
  
}
