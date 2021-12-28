import { Component, OnInit, ViewChild } from '@angular/core';
import { ProdPerCategComponent } from 'src/app/views/products/prod-per-categ/prod-per-categ.component';
import {ProductsService} from '../../../core/services/products.service'
@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss']
})
export class TopNavComponent implements OnInit {
@ViewChild(ProdPerCategComponent, { static: false })
collection!: ProdPerCategComponent;
loadingCategories = false
navLinks: any[] = [];
constructor(
    private ProductsService:ProductsService
  ) { }

  ngOnInit(): void {
    // this.getNavlinks()
  }
  onItemSelector(value :any) {
    this.collection = value
    }
    // getNavlinks(){
    //   this.loadingCategories=true
    //   this.ProductsService.getCategories().subscribe(res=>{
    //     let data = res.result.response
    //     console.log(data);
        
    //     this.navLinks = res.result.response
    //     this.loadingCategories=false
         
    //   })
    // }
}
