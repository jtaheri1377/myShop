import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SwiperModule } from 'swiper/angular'
import { MatPaginatorModule } from '@angular/material/paginator';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { ListComponent } from './pages/filter/list/list.component';
import { PaginationComponent } from './shared/pagination/pagination.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { FilterComponent } from './pages/filter/filter.component';
import { OverlayDirective } from './directives/overlay/overlay.directive';
import { FilterNavbarComponent } from './pages/filter/filter-navbar/filter-navbar.component';
import { ModalItemsComponent } from './pages/filter/modal-items/modal-items.component';
import { BasketComponent } from './pages/basket/basket.component';
import { CategorySliderComponent } from './pages/home/category-slider/category-slider.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { SidebarDirective } from './directives/sidebar/sidebar.directive';
import { LocationComponent } from './shared/location/location.component';
import { AddressListComponent } from './pages/address-list/address-list.component';
import { FirstSliderComponent } from './pages/home/first-slider/first-slider.component';
import { TitlesComponent } from './pages/home/titles/titles.component';
import { ThirdAdsComponent } from './pages/home/third-ads/third-ads.component';
import { ForthContainerComponent } from './pages/home/forth-container/forth-container.component';
import { CoveredSliderComponent } from './pages/home/covered-slider/covered-slider.component';
import { NormalSliderComponent } from './pages/home/normal-slider/normal-slider.component';
import { TwoHorizontalAdsComponent } from './pages/home/two-horizontal-ads/two-horizontal-ads.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    ListComponent,
    PaginationComponent,
    ProductDetailComponent,
    FilterComponent,
    OverlayDirective,
    FilterNavbarComponent,
    ModalItemsComponent,
    BasketComponent,
    CategorySliderComponent,
    PageNotFoundComponent,
    SidebarComponent,
    SidebarDirective,
    LocationComponent,
    AddressListComponent,
    FirstSliderComponent,
    TitlesComponent,
    ThirdAdsComponent,
    ForthContainerComponent,
    CoveredSliderComponent,
    NormalSliderComponent,
    TwoHorizontalAdsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SwiperModule,
    BrowserAnimationsModule,
    MatPaginatorModule,
    ReactiveFormsModule,
    LeafletModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
