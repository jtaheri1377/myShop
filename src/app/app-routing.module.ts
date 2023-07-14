import { AppComponent } from './app.component';
import { AddressListComponent } from './pages/address-list/address-list.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { BasketComponent } from './pages/basket/basket.component';
import { FilterNavbarComponent } from './pages/filter/filter-navbar/filter-navbar.component';
import { ModalItemsComponent } from './pages/filter/modal-items/modal-items.component';
import { FilterComponent } from './pages/filter/filter.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { HomeComponent } from './pages/home/home.component';
import { ListComponent } from './pages/filter/list/list.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'home',
    redirectTo: ''
  },
  {
    path: 'detail/:id',
    component: ProductDetailComponent
  },
  {
    path: 'basket',
    component: BasketComponent
  },
  {
    path: 'filter',
    component: FilterComponent
  },
  {
    path: 'address',
    component: AddressListComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'top'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
