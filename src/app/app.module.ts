import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { PageComponent } from './page/page.component';
import { AppRoutingModule } from './app-routing.module';
import { RoyalComponent } from './royal/royal.component';
import { OrderDetailComponent } from './order-detail/order-detail.component';
import { CertComponent } from './cert/cert.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HttpService } from './public_service/http.service';


@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    PageComponent,
    RoyalComponent,
    OrderDetailComponent,
    CertComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
