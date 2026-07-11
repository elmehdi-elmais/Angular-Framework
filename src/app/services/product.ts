import { Service, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';


@Service()
export class Product {
  private http = inject(HttpClient);

  getAllProducts(): Observable<any>{
    return this.http.get("http://192.168.1.164:8085/products");
  }
  deleteProduct(product: any): Observable<any>{
    //this.products = this.products.filter(p=>p.id != product.id);
    this.http.delete("\"http://192.168.1.164:8085/products/"+product.id+"");
    return this.getAllProducts();
  }
}
