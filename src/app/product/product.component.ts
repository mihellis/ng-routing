import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
  
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  productId : string | null = '';
  sellerId = 5678;

  constructor(route: ActivatedRoute) {
    // this.productId = route.snapshot.paramMap.get('id');
    route.paramMap.subscribe(
      params => this.productId = params.get('id')
      );
  }

  ngOnInit(): void {
  }

}
