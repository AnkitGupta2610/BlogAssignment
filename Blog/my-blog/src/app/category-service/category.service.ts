import { Injectable } from '@angular/core';
import {Http} from "@angular/http";

const BASE_URL = 'http://localhost:3000/categories/';

@Injectable()
export class CategoryService {

  constructor(private http:Http) { }

  loadCategories(){
    return this.http.get(BASE_URL)
      .map(response => response.json())
  }
}
