import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../public_service/http.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-royal',
  templateUrl: './royal.component.html',
  styleUrls: ['./royal.component.css']
})
export class RoyalComponent implements OnInit {
  storeDetail: object[] = [];

  constructor(
    private http: HttpService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    let storeid = this.route.snapshot.params["storeid"];


    this.http.getData('/storeDetail/' + storeid).subscribe(
      data => {
        console.table(data);
        this.storeDetail = data;
      }
    )
  }

}
