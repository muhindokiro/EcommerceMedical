import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from 'src/app/core/services/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  loadingProducts = false;
  productList: any[] = [];
  constructor(
    private productService: ProductsService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.getProductList()
  }
  goToDetails(event: { code: any; }): any {
    // console.log(event.code, "THIS EVENT")
    // this.router.navigate([`/home/productdata/${event.code}`]);
  }
  getProductList(){
    this.loadingProducts = true
    this.productService.getProductList().subscribe(res=>{
      console.log(res.result.response,"TESTING THE PRODUCT LIST");
      const n = 12 //get the first 5 items
      const newArray = res.result.response.slice(0, n)
      this.productList = newArray
      this.loadingProducts
    })
    }
}
