import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }//yasna3 fi var http de type HtppClient

    /** GET products from the server */
    getProducts (): Observable<any> {
      return this.http.get('http://localhost:8080/api/products');
    }

    getCategory(): Observable<any>{
      return this.http.get('http://localhost:8080/api/categories');
    }

    getProductById(id) : Observable<any> {
      return this.http.get('http://localhost:8080/api/product/' + id);
    }
    getCategoryById(id) : Observable<any>{
      return this.http.get('http://localhost:8080/api/ProductsByCategory/' + id);
    }
    getProductsWithDiscount (): Observable<any> {
      return this.http.get('http://localhost:8080/api/remise');
    }
}
