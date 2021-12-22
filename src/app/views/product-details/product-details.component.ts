import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from 'src/app/core/services/products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  loadingProductdetails = false;
  singleProduct: any[] = [];
  product_id = '0';
  constructor(
    private activatedRoute: ActivatedRoute,
    private productDataService: ProductsService,
    private router: Router,
  ) { 
    this.activatedRoute.params.subscribe((params) => {
      this.product_id = params.id;
    });
  }
  ngOnInit(): void {
    this.getProductDetails()
  }
getProductDetails():void{
  this.productDataService.getSingleProduct(this.product_id).subscribe(res=>{
    console.log(res.data);
    this.singleProduct = res.data
  })
}
}
