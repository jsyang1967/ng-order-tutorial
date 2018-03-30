import { HttpService } from './../../public_service/http.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { OrderStore } from '../../store/order.store';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css']
})
export class OrderDetailComponent implements OnInit {
  store: object[] = [];
  constructor(
    private _formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private orderStore: OrderStore,
    private http: HttpService
  ) { }

  orderForm: FormGroup
  filterType: any[] = [];
  filterGood: any[] = [];
  ngOnInit() {

    let storeid = this.route.snapshot.params["storeid"];
    let typeid = this.route.snapshot.params["typeid"];
    let itemid = this.route.snapshot.params["itemid"];

    this.http.getData('/storeDetail/' + storeid).subscribe(
      data => {
        this.store = data;
        this.filterType = data['goodTypes'].filter(type => type['id'] == typeid);
        this.filterGood = this.filterType[0]['goods'].filter(good => good['id'] == itemid)[0];

        this.orderForm = this._formBuilder.group({
          itemName: [this.filterGood['itemName']],
          price: [this.filterGood['price']],
          orderNum: [0, [Validators.required, Validators.min(1)]],
          memo: [null],
          total: [0]
        })
      }
    )



  }

  onSubmit() {
    this.orderStore.setOrderList(this.orderForm.value);
  }

  addnum() {
    let origin_num = this.orderForm.controls['orderNum'].value;
    this.orderForm.controls['orderNum'].setValue(origin_num + 1);
    this.change(origin_num + 1);
  }

  minusnum() {
    let origin_num = this.orderForm.controls['orderNum'].value;
    this.orderForm.controls['orderNum'].setValue(origin_num - 1);
    this.change(origin_num - 1);
  }

  change(origin_num) {
    console.log(origin_num);
    const price = this.orderForm.controls['price'].value;
    this.orderForm.controls['total'].setValue((origin_num) * price);
  }


}
