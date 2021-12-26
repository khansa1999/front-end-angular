import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  productID: any;
  productData: any;

  constructor(
    private ar: ActivatedRoute,
    private ProductService: ProductService
  ) {}

  ngOnInit(): void {
    this.productID = this.ar.snapshot.paramMap.get('id');

    this.productID = this.ar.paramMap.subscribe((params) => {
      this.productID = params.get('id');

      this.ProductService.getProductById(this.productID).subscribe((data) => {
        this.productData = data;
        console.log(data);
      });
    });
  }
}
