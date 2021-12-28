import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private baseUrl = environment.base_url;
  constructor(
    private http: HttpClient

  ) { }

  getProductList(): Observable<any> {
    // @ts-ignore
    const headers = new HttpHeaders()
    .set('Content-Type', 'application/json')
    let data ={"name":"head"}
    return this.http.post(this.baseUrl + `/product`,{data});
  }
  getCategories(): Observable<any> {
    // @ts-ignore
    const headers = new HttpHeaders()
    .set('Content-Type', 'application/json')
    let data ={"name":"ppe"}
    return this.http.post(this.baseUrl + `/product/categories`,data);
  }
  getSingleProduct(product_id: any): Observable<any> {
    // @ts-ignore
    const headers = new HttpHeaders()
    .set('Content-Type', 'application/json')
    let data ={"product_id":product_id}
    return this.http.post(this.baseUrl + `/single/product`,data);
  }
  getProductsPerCategory(category_id: any): Observable<any> {
    // @ts-ignore
    const headers = new HttpHeaders()
    .set('Content-Type', 'application/json')
    console.log(category_id,'TESTING THE CATEGORY WE ARE PASSING');
    
    let data ={"category_id":category_id}
    return this.http.post(this.baseUrl + `/products/per/category`,{data});
  }
  // getProductsCategory(product_id: any): Observable<any> {
  //   // @ts-ignore
  //   const headers = new HttpHeaders()
  //   .set('Content-Type', 'application/json')
  //   let data ={"product_id":product_id}
  //   return this.http.post(this.baseUrl + `/single/product`,data);
  // }
}
