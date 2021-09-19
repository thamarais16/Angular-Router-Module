import { Injectable } from '@angular/core';

export class Product{
  productId: string;
  name: string;
  price: string;

  constructor(id: string, name: string, price: string){
    this.productId = id;
    this.name = name;
    this.price = price; 
  }
}

@Injectable()
export class ProductService {
 
  constructor() { }
  
  getProducts(): Product[]{
    let  products: Product[];
    products = [
      new Product("20", "Pen drive", "600"),
      new Product("21", "Hard drive", "2600"),
      new Product("22", "Cd drive", "3600"),
      new Product("22", "Google drive", "0")
    ]

    return products;
  }
}