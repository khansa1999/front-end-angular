import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../modele/product';
import { ProductService } from '../services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  constructor(
    private router: Router,
    private ar: ActivatedRoute,
    private ProductService: ProductService
  ) {}



  products?: Product[];
  filtredProducts?: Product[];

  ngOnInit(): void {
    this.ProductService.getProducts().subscribe((data) => {
      this.products = data;
      this.filtredProducts = this.products;
    });
  }

  searchText?: string = '';

  /*Search() {
    this.filtredProducts = this.products?.filter((res) => {
      return res.name
    
        .match('' + this.searchText?.toLocaleLowerCase());
    });
  }*/

  getColor(colorx: any) {
    if (colorx == 0) {
      return '#F5365C';
    } else {
      return 'white';
    }
  }

  isEmpty() {
    if (this.filtredProducts?.length == 0) {
      return true;
    }
    return false;
  }

  productRemove(prod: Product) {
    let conf = confirm('Are you sure  you want to delete this?');
    if (conf) {
      this.ProductService.deleteProduct(prod.id).subscribe((response) => {
        this.ProductService.getProducts().subscribe((data) => {
          this.products = data;
          this.filtredProducts = this.products;
        });
      });
    }
  }
}
