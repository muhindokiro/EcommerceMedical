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

  // getProductData(): Observable<any> {
  //   // @ts-ignore
  //   const headers = new HttpHeaders()
  //   .set('Content-Type', 'application/json')
  //   let data ={"brand_id":"head"}
  //   return this.http.post(this.baseUrl + `/product`,{data});
  // }
}
