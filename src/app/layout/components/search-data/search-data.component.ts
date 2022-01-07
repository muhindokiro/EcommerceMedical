import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/core/services/products.service';

@Component({
  selector: 'app-search-data',
  templateUrl: './search-data.component.html',
  styleUrls: ['./search-data.component.scss']
})
export class SearchDataComponent implements OnInit {
  SearchArray!:any[];
  loadingProd =false
  constructor(
    private ProductsService:ProductsService
  ) { }

  ngOnInit(): void {
    this.getSeachList()

  }
  getSeachList(){
    this.loadingProd=true
    this.ProductsService.getAllProducts().subscribe(res=>{
      console.log(res.result.response,'THE ARRAY TO SEARCH FROM');
      
      this.SearchArray = res.result.response
      this.loadingProd=false
       
    })
  }
}
