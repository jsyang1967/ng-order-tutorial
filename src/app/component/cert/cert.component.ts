import { Component, OnInit } from '@angular/core';
import { OrderStore } from '../../store/order.store';

@Component({
  selector: 'app-cert',
  templateUrl: './cert.component.html',
  styleUrls: ['./cert.component.css']
})
export class CertComponent implements OnInit {

  constructor(
    private orderStore:OrderStore
  ) {
     
   }

  ngOnInit() {
  }

  get orderTotal(){
    console.log(this.orderStore.getOrderList);
    return this.orderStore.getOrderList.reduce((a,b) => a +b['total'],0);

  }
}
