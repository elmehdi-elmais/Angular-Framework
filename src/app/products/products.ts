import { Component, OnInit, signal } from '@angular/core';
import { NgForOf } from '@angular/common';
import { Product } from '../services/product';

@Component({
  selector: 'app-products',
  imports: [
    NgForOf
  ],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products implements OnInit{
  products = signal<Array<any>>([]);

  //products!: Array<any>;
  //products: Array<any> = [];
  constructor(private product: Product) {
  }

  ngOnInit() {
    this.getAllProduct();
  }
  getAllProduct() {
    this.product.getAllProducts().subscribe({
      next: data => {
        this.products.set(data);
        console.log(this.products);
      },
      error: (err) => {
        console.error("Erreur lors du chargement des produits", err);
      }
    });
  }
  protected handleDelete(product: any) {
    let v = confirm('êtes vous sûre de vouloir supprimer?');
    if (v == true ){

      this.product.deleteProduct(product).subscribe({
        next: value => {
          this.getAllProduct()
        },
        error: err => {
          console.log(err)
      }
      });
   //   this.products = this.product.getAllProducts();
    }
  }
}
