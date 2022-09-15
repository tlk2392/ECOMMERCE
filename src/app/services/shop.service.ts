import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  constructor(private router: Router, private http: HttpClient) { 

  }
  generateOptions(){
    let option = []
    for (let i = 1; i<100; i++){
      option.push(i)
    }
    return option
  }
  buyNow(id:number, quantity:number){
    this.addToCart(id,quantity)
    this.router.navigate(["/cart"]);
  }
  getCart(){
    return JSON.parse(localStorage.getItem("cart") || "{}");
  }
  getItems(){
   return this.http.get<any>("http://localhost:5000/shoppinglist")
  }
  addToCart(id:number, quantity:number){
    let cart = this.getCart();
     let key = id as unknown as keyof typeof cart;
     if(id in cart){
      cart[key]=  Number(quantity)+ Number(cart[key]);
     }
     else{
      cart[key]= Number(quantity);
     }
     localStorage.setItem("cart",JSON.stringify(cart))
      alert("Item added to cart")
    }
    
}
