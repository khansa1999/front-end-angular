import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css'],
})
export class UpdateProductComponent implements OnInit {
  productID: any;
  productData: any;

  constructor(
    private ar: ActivatedRoute,
    private router: Router,
    private ProductService: ProductService
  ) {}

  ngOnInit(): void {
    this.productID = this.ar.snapshot.paramMap.get('id');
    this.ProductService.getProductById(this.productID).subscribe((data) => {
      this.productData = data;
    });
  }

  updateProduct() {
    this.ProductService.updateProduct(
      this.productData.id,
      this.productData
    ).subscribe(
      (response) => {
        this.router.navigate(['products']);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
