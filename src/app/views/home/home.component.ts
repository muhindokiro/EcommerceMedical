import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from 'src/app/core/services/products.service';
import { ProductDetailsComponent } from '../product-details/product-details.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @ViewChild(ProductDetailsComponent, { static: false })
  collection!: ProductDetailsComponent;
  loadingProducts = false;
  productList: any[] = [];
  constructor(
    private productService: ProductsService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.getProductList()
  }
  onApply(id: any, title: any) {
    this.collection = id
  }
  getProductList(){
    this.loadingProducts = true
    this.productService.getProductList().subscribe(res=>{
      const n = 8 //get the first 5 items
      const newArray = res.result.response.slice(0, n)
      this.productList = newArray
      this.loadingProducts =false
    })
    }
}
