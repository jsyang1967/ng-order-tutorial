import { Injectable } from '@angular/core';

@Injectable()
export class OrderStore {

    orderList: object[] = [];
    constructor() { }

    get getOrderList() {
        return this.orderList;
    }

    setOrderList(order: any) {
        this.orderList.push(order);
    }


}