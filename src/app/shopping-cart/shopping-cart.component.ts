import { Component, OnInit } from '@angular/core';
import { ShopService } from '../services/shop.service';
import {NgxSpinnerService} from 'ngx-spinner';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  cart:Object={}
  items:any = []
  Object=Object;
  option:Array<number> = []
  ids = []
  total = 0

  constructor(public shop: ShopService, private spinner: NgxSpinnerService, private http: HttpClient ) {
    this.option = shop.generateOptions()
   }

  ngOnInit(): void {
          /** spinner starts on init */
          this.spinner.show();

          setTimeout(() => {
            /** spinner ends after 5 seconds */
            this.spinner.hide();
          }, 1000);
    this.cart=this.shop.getCart()
    this.shop.getItems().subscribe({
      next:res=>{
        for(let i=0;i<res.length; i++)
        {
          let  item = res[i];
          let key = item.id as unknown as keyof typeof this.cart;
          if(key in this.cart){
            item.quantity = this.cart[key];
            this.items.push(item)
          }
        }
        console.log(this.items)
        this.calculateTotal()
      }
    })
  }
  getItem(id:string){
    return this.items.find(((item: { id: number; })=>item.id===parseInt(id)));
  }
  clearCart(){
    localStorage.setItem("cart","{}")
    this.cart={}
    this.items=[]
    this.total=0
  }
  deleteItem(id:string){
    let key = id as unknown as keyof typeof this.cart;
    delete this.cart[key]
    localStorage.setItem("cart", JSON.stringify(this.cart))
    this.items=this.items.filter((item: { id: string; })=>item.id!==id)
    this.calculateTotal()
    if(confirm("Are you sure to delete item?")) {
    }
  }
  updateQuantity(id:string, idx:number){
    let key = id as unknown as keyof typeof this.cart;
    this.cart[key]=this.items[idx].quantity
    localStorage.setItem("cart", JSON.stringify(this.cart))
    this.calculateTotal()
  }
  calculateTotal(){
    this.total = 0
    for(let i=0;i<this.items.length;i++) {
      this.total += this.items[i].price*this.items[i].quantity
    }
  }
  purchase(){
    this.http.post("http://localhost:5000/checkout",this.cart)
    .subscribe({
      next:(res)=>
      alert(JSON.stringify(res)),
      complete:()=>this.clearCart()
    })
  }
}
