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

  getAllProducts(): Observable<any> {
    // @ts-ignore
    const headers = new HttpHeaders()
    .set('Content-Type', 'application/json')
    let data ={"name":"ppe"}
    return this.http.post(this.baseUrl + `/all/product`,data);
  }

  getSingleProduct(product_id: any): Observable<any> {
    // @ts-ignore
    const headers = new HttpHeaders()
    .set('Content-Type', 'application/json')
    let data ={"product_id":product_id}
    return this.http.post(this.baseUrl + `/single/product`,data);
  }
  getProductsPerCategory(category_id: number): Observable<any> {
    // @ts-ignore
    const headers = new HttpHeaders()
    .set('Content-Type', 'application/json')    
    let data ={"category_id":category_id}
    console.log(data,'THE FILTER WE ARE PASSING');
    
    return this.http.post(this.baseUrl + `/products/per/category`,data);
  }
}
