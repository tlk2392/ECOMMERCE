import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { ItemsPageComponent } from './items-page/items-page.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';

const routes: Routes = [
  {
    path:"home",
    component: ItemsPageComponent
  },
  {
    path:"",
    redirectTo:"home",
    pathMatch:"full"
  },
  {
    path:"item/:id",
    component: ItemDetailComponent
  },
  {
    path:"cart",
    component: ShoppingCartComponent
  },
  {
    path:"**",
    redirectTo:"home",
    pathMatch:"full"
  }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
