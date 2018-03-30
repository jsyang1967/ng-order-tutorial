import { CertComponent } from './cert/cert.component';
import { OrderDetailComponent } from './order-detail/order-detail.component';
import { RoyalComponent } from './royal/royal.component';
import { IndexComponent } from './index/index.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageComponent } from './page/page.component';

const routes: Routes = [
    { path: '', redirectTo: 'page', pathMatch: 'full' },
    {
        path: 'page', component: PageComponent,
        children: [
            { path: '', redirectTo: 'index', pathMatch: 'full' },
            { path: 'index', component: IndexComponent },
            { path: 'royal', component: RoyalComponent },
            { path: 'order-detail', component: OrderDetailComponent },
            { path: 'cert', component: CertComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }