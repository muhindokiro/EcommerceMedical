import { Component, OnInit } from '@angular/core';
import {ProductsService} from '../../../core/services/products.service'
@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss']
})
export class TopNavComponent implements OnInit {
loadingCategories = false
ppeNavs: any[] = [];
constructor(
    private ProductsService:ProductsService
  ) { }

  ngOnInit(): void {
    // this.getallcategories()
  }
// getallcategories(){
// this.loadingCategories = true
// this.ProductsService.getCategories().subscribe(res=>{
//   this.loadingCategories = false
//  this.ppeNavs=res.result.response
// })
// }
}
