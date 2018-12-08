import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  produits = [];
  constructor() { }
  ajouterCarte(produit)
  {
    this.produits.push(produit);
    localStorage.setItem('key',JSON.stringify(this.produits))
  }
  getLeng()
  { console.log(this.produits.length);
    return localStorage.length-1;
  }
  getProduit()
  { this.produits = JSON.parse(localStorage.getItem('key'));
    console.log(this.produits);
    return this.produits;
  }
  vider()
  {
    localStorage.removeItem('key');
  }
}
