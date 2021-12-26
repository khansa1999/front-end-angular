import { Component, OnInit } from '@angular/core';
import { Product } from '../modele/product';
import { ProductService } from '../services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
})
export class AddProductComponent implements OnInit {
  newProduct = {} as Product;

  constructor(private router: Router, private ProductService: ProductService) {}

  ngOnInit(): void {
    this.newProduct.image = '../../assets/img/product5.jpg';
  }

  addProduct() {
    this.ProductService.addProduct(this.newProduct).subscribe(
      (response) => {
        console.log(response);
        this.router.navigate(['products']);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
