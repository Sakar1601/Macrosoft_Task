import { Injectable } from "@angular/core";
import { Products } from "../products/products.model";

@Injectable({providedIn:"root"})
export class ProductService{
      products: Products[]=[];

    constructor(){
        this.products = [
          new Products('Samsung Mobile','Features: 64mp camera, 6000Mah battery','Rs 10000'),
          new Products('Vivo Mobile','Features: 48mp camera, 4000Mah battery','Rs 8000'),
          new Products('Iphone','Features: 24mp camera, 5000mah Battery','Rs 20000')  
          ];
    }

}