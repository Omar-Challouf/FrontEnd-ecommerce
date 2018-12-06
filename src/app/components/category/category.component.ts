import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
   id
   category
  constructor(private router:ActivatedRoute, private productService: ProductsService) { }

  ngOnInit() {
    this.id = this.router.snapshot.params['id'];
    console.log(this.id)
    this.getCategory()
  }
  getCategory(){
    this.productService.getCategoryById(this.id)
    .subscribe((res)=>{this.category=res;console.log(res);})

  }

}
