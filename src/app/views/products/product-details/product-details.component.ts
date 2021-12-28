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
  relatedProduct: any[] = [];
  product_id = '8020';
  loadingProducts = false;
  productList: any[] = [];

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
  this.loadingProductdetails = true
  this.productDataService.getSingleProduct(this.product_id).subscribe(res=>{
    this.singleProduct = res.result.response
    this.relatedProduct = res.result.related
    this.loadingProductdetails = false    
  })
}}
