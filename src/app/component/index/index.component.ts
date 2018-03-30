import { HttpService } from './../../public_service/http.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  goods: any[] = [];
  constructor(private http: HttpService) { }

  ngOnInit() {
    this.http.getData('/goods').subscribe(
      data => {
        this.goods = data;
      }
    );
  }

}
