import { Injectable } from '@angular/core';
import {Http,Headers} from "@angular/http";

const BASE_URL = 'http://localhost:3000/blogs/';
const  header = {headers: new Headers({'Content-Type':'application/json'})};

@Injectable()
export class BlogService {

  constructor(private http:Http) { }

  loadBlogs(){
    return this.http.get(BASE_URL)
      .map(response => response.json())
  }

  postBlog(data){
    return this.http.post(BASE_URL,data,header)
      .map(response => response.json())
  }

  updateBlog(data){
    return this.http.patch(`${BASE_URL}${data.id}`,data,header)
      .map(response => response.json())
  }

  deleteBlog(data){
    return this.http.delete(`${BASE_URL}${data.id}`)
      .map(response => response.json())
  }

}
