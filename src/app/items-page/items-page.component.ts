import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-items-page',
  templateUrl: './items-page.component.html',
  styleUrls: ['./items-page.component.css']
})
export class ItemsPageComponent implements OnInit {
  items:any = []
  option:Array<number> = []
  constructor(private http: HttpClient) {
    for (let i = 0; i<100; i++){
      this.option.push(i)
    }
   }

  ngOnInit(): void {
    this.http.get<any>("http://localhost:5000/shoppinglist").subscribe({
      next:res=>{
        for(let i=0;i<res.length; i++)
        {
           let  item = res[i];
           item.quantity = 0;
           this.items.push(item)

        }
      }
    })
  }

  addToCart(id:number, quantity:number){
   let c = localStorage.getItem("cart")
   let cart:Object = {}
   if(c !== null){
    cart=JSON.parse(c)
   }
   let key = id as unknown as keyof typeof cart;
   if(id in cart){
  //   Object.keys(cart).map()
  //   if(typeof cart[key]==="string"){let q = parseInt(cart[key]) + quantity;
  //   cart[key]+= quantity;
  // }
   }
   else{
    //cart[key]= quantity;
   }
   console.log(cart)
  }

}
