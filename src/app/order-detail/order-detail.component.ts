import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css']
})
export class OrderDetailComponent implements OnInit {

  constructor(private _formBuilder: FormBuilder) { }

  orderForm: FormGroup

  ngOnInit() {
    this.orderForm = this._formBuilder.group({
      itemid: [null],
      ordernum: [0, [Validators.required, Validators.min(1)]],
      memo: [null]
    })
  }

  onSubmit() {
    console.log(this.orderForm.value);
  }

  addnum() {
    console.log(this.orderForm.controls['ordernum'].value);
    let origin_num = this.orderForm.controls['ordernum'].value;
    this.orderForm.controls['ordernum'].setValue(origin_num + 1);
  }

  minusnum() {
    console.log(this.orderForm.controls['ordernum'].value);
    let origin_num = this.orderForm.controls['ordernum'].value;
    this.orderForm.controls['ordernum'].setValue(origin_num - 1);
  }

  get total() {
    return this.orderForm.controls['ordernum'].value * 120;
  }

}
