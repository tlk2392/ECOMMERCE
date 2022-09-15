import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ShopService } from '../services/shop.service'
import {NgxSpinnerService} from 'ngx-spinner'

@Component({
  selector: 'app-items-page',
  templateUrl: './items-page.component.html',
  styleUrls: ['./items-page.component.css']
})
export class ItemsPageComponent implements OnInit {
  items:any = []
  option:Array<number> = []
  constructor(private http: HttpClient , public shop:ShopService, private spinner: NgxSpinnerService) {
    this.option = shop.generateOptions()
   }

  ngOnInit(): void {
          /** spinner starts on init */
          this.spinner.show();

          setTimeout(() => {
            /** spinner ends after 5 seconds */
            this.spinner.hide();
          }, 1000);
   this.shop.getItems().subscribe({
      next:res=>{
        for(let i=0;i<res.length; i++)
        {
           let  item = res[i];
           item.quantity = 1;
           this.items.push(item)

        }
      }
    })
  }
}
