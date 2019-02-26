import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomersComponent } from './customers.component';
import { CardViewComponent } from './card-view.component';

const customersRoutes: Routes = [
  {path:'', component:CustomersComponent}
];

@NgModule({
  imports: [RouterModule.forChild(customersRoutes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule {
  static component=[CustomersComponent,CardViewComponent]
 }
