import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProductComponent} from './product/product.component';
import {HomeComponent} from './home/home.component';


const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'producten', component: ProductComponent }
    ];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})

export class AppRoutingModule {

}

