import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'card-view',
  templateUrl: './card-view.component.html',
  styleUrls: ['./card-view.component.css']
})
export class CardViewComponent implements OnInit {
  @Input() customersData;
  constructor() { }

  ngOnInit() {
    console.log('this.customersData',this.customersData);
  }

}
