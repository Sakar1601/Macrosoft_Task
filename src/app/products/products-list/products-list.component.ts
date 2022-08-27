import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';
import { Products } from '../products.model';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  products: Products[]=[]

  constructor( private productService: ProductService ) { }

  ngOnInit() {
    this.products = this.productService.products
  }

}
