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
  onApply(id: any, title: any) {
    console.log(id,title,"TESTING THE DETAILS SECTIONS");
    
    // let data = {
    //   'title': title
    // }
    // localStorage.setItem("job",JSON.stringify(data))
    // this.post = post;
    // this.route.navigate([`/jobs/apply/${id}/${title}`])
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
