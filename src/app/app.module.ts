import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { IndexComponent } from './component/index/index.component';
import { PageComponent } from './component/page/page.component';
import { AppRoutingModule } from './app-routing.module';
import { RoyalComponent } from './component/royal/royal.component';
import { OrderDetailComponent } from './component/order-detail/order-detail.component';
import { CertComponent } from './component/cert/cert.component';
import { NavBarComponent } from './component/nav-bar/nav-bar.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpService } from './public_service/http.service';

import{ ReactiveFormsModule} from '@angular/forms';
import { OrderStore } from './store/order.store';

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
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [HttpService,OrderStore],
  bootstrap: [AppComponent]
})
export class AppModule { }
