import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProductComponent} from './products/product/product.component';
import {HomeComponent} from './home/home.component';
import {ProductListComponent} from './products/product-list/product-list.component';


const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'producten', component: ProductListComponent },
    { path: 'product', component: ProductComponent },
    { path: 'product', component: ProductComponent },
    { path: '', component: ProductComponent }
    ];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})

export class AppRoutingModule {

}

