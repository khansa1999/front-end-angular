import { Injectable } from '@angular/core';
import { Product } from '../modele/product';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  host = 'http://localhost:3000/products';



  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private client: HttpClient) {}

  public getProducts(): Observable<Product[]> {
    return this.client.get<Product[]>(this.host);
  }

  public getProductById(id: any): Observable<Product> {
    return this.client.get<Product>(`${this.host}/${id}`);
  }

  public addProduct(produit: Product): Observable<void> {
    return this.client.post<void>(this.host, produit, this.httpOptions);
  }

  public deleteProduct(id: any): Observable<void> {
    return this.client.delete<void>(`${this.host}/${id}`);
  }

  public updateProduct(id: any, produit: Product): Observable<void> {
    return this.client.put<void>(
      `${this.host}/${id}`,
      produit,
      this.httpOptions
    );
  }
}
