import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { ShopService } from '../services/shop.service';
import {NgxSpinnerService} from 'ngx-spinner'
@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {
  itemDetails = {
    id: 0, 
    name: "",
    description: "",
    price:0
  }
  quantity=1
  option:Array<number> = []

  constructor(private http: HttpClient, private route: ActivatedRoute, public shop: ShopService, private spinner: NgxSpinnerService) { 
    this.option = shop.generateOptions()
    
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.http.get<any>("http://localhost:5000/shoppinglist/"+ params["id"]).subscribe({
        next:res=>{this.itemDetails=res;}
      })
    });
        /** spinner starts on init */
        this.spinner.show();

        setTimeout(() => {
          /** spinner ends after 5 seconds */
          this.spinner.hide();
        }, 1000);
  }

}
