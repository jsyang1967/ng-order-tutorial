import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../public_service/http.service';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OrderStore } from '../../store/order.store';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css']
})
export class OrderDetailComponent implements OnInit {
  item;
  filterType;
  filterGood;
  orderForm: FormGroup;

  constructor(
    private http: HttpService,
    private route: ActivatedRoute,
    private _formBuilder:FormBuilder,
    private orderStore: OrderStore

  ) { }

  ngOnInit() {

    const storeid = this.route.snapshot.params['storeid'];
    console.log(storeid);

    const typeid = this.route.snapshot.params['typeid'];
    console.log(typeid);
    
    const goodid = this.route.snapshot.params['goodid'];
    console.log(goodid);

    this.http.getData('storeDetail/' + storeid).subscribe(
      data =>{
        console.log(data);
        this.item = data;
        this.filterType = data['goodTypes'].filter(type => type.id == typeid)[0];
        console.log(this.filterType);
        
        this.filterGood = this.filterType['goods'].filter(good => good.id == goodid)[0];
        console.log(this.filterGood);  
        
        this.orderForm = this._formBuilder.group({
          itemName: [this.filterGood['itemName']],
          price: [this.filterGood['price']],
          orderNum: [0,[Validators.min(0)]],
          memo: [],
          total: [0]
        })

      }
    )


  }


  onSubmit(){
    console.log(this.orderForm.value);
    this.orderStore.setOrderList(this.orderForm.value);
  }

 minus(){
    let origin_num = this.orderForm.controls['orderNum'].value;
    this.orderForm.controls['orderNum'].setValue(origin_num-1);
    this.calcSum();
 }

 add(){
  let origin_num = this.orderForm.controls['orderNum'].value;
    this.orderForm.controls['orderNum'].setValue(origin_num+1);
    this.calcSum();
}

calcSum(){
  let origin_num = this.orderForm.controls['orderNum'].value;
  let price = this.orderForm.controls['price'].value;
  this.orderForm.controls['total'].setValue(origin_num * price);
}

}
