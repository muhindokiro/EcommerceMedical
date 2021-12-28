import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {ProductsService} from '../../../core/services/products.service'

@Component({
  selector: 'app-prod-per-categ',
  templateUrl: './prod-per-categ.component.html',
  styleUrls: ['./prod-per-categ.component.scss']
})
export class ProdPerCategComponent implements OnInit {
  category_id = 221;
  loadingCategory = false
  categoryProduct:any[] = [];
  constructor(
    private activatedRoute: ActivatedRoute,
    private ProductsService:ProductsService
  ) {
    this.activatedRoute.params.subscribe((params) => {
      this.category_id = params.id;      
    });
  }
  // (click)="onApply(item.id,item.name)"
  ngOnInit(): void {    
    this.getCategoryProducts()
  }
getCategoryProducts(){
  this.loadingCategory = true
  console.log(this.category_id,"testing the category products");
  this.ProductsService.getProductsPerCategory(this.category_id).subscribe(res=>{
    let data = res
    this.categoryProduct = res.result.response
    console.log(data,'waaaaaaaaaaaaaaaaaaah!');
    this.loadingCategory = false
    
  },
  error => {
    console.log(JSON.stringify(error));
    this.loadingCategory = false;
  }
  );
}
}
