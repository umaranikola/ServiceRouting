import { Component, OnInit } from '@angular/core';
import { DataService} from '../core/services/data.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  customers;

  loadCardViewStatus:boolean;
  loadListViewStatus:boolean;
  loadMapViewStatus:boolean;
  loadNewCustomerStatus:boolean;

  loadCardView(){
    this.loadCardViewStatus=true;
    this.loadListViewStatus=false;
    this.loadMapViewStatus=false;
    this.loadNewCustomerStatus=false;
  }
  loadListView(){
    this.loadCardViewStatus=false;
    this.loadListViewStatus=true;
    this.loadMapViewStatus=false;
    this.loadNewCustomerStatus=false;
  }
  // loadMapView(){
  //   this.loadCardViewStatus=false;
  //   this.loadListViewStatus=false;
  //   this.loadMapViewStatus=true;
  //   this.loadNewCustomerStatus=false;
  // }
  // loadNewCustomer(){
  //   this.loadCardViewStatus=false;
  //   this.loadListViewStatus=false;
  //   this.loadMapViewStatus=false;
  //   this.loadNewCustomerStatus=true;
  // }
  constructor(private dataService:DataService) { 
    console.log("Customers Componet.ts ");
  
  }

  ngOnInit() {
    this.dataService.getCustomersData().subscribe(
      (customers)=>{
      this.customers = customers;
      console.log(this.customers);
    },
  (err)=>{
    console.log("err", err);
  })

  }

}
