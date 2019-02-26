import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';


const appRoutes: Routes = [
  // {path:'', redirectTo:'/customers', pathMatch:'full' },
  {path:'customers', loadChildren:"./customers/customers.module#CustomersModule"},
  {path:'orders', loadChildren:"./orders/orders.module#OrdersModule"}
  // {path:'**' , component:PagenotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
