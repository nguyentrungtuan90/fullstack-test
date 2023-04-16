import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Products } from '../models/products.model'

const baseUrl:string = 'http://localhost:3000/api/products';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  constructor(private http: HttpClient) { }

  getAll(limit: number = 10, page: number = 1, search: string = ''): Observable<{count: number, rows: Products[]}> {
    return this.http.get<{count: number, rows: Products[]}>(`${baseUrl}?limit=${limit}&page=${page}&search=${search}`);
  }

  get(id: number): Observable<Products> {
    return this.http.get<Products>(`${baseUrl}/${id}`);
  }
}
