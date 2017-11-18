import { Component, OnInit } from '@angular/core';
import {UserService} from "../user-service/user.service";
import {Router} from "@angular/router";
import {BlogService} from "../blog-service/blog.service";
import {forEach} from "@angular/router/src/utils/collection";
import {CategoryService} from "../category-service/category.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  private heading:string;
  private blogToBeUpdated:any;
  private user:any;
  private blogs:any;
  private categories:any;
  private filteredBlogs:any;

  constructor(private router:Router,private blogService:BlogService,private userService:UserService,private categoryService:CategoryService) {
    if(localStorage.getItem("isloggedin") == "false"){
      console.log(localStorage.getItem("isloggedin"));
      this.router.navigate(['']);
    }

    this.blogToBeUpdated = {
      title:'',
      description:'',
      authorId:0,
      categoryId:0,
      date:null,
      id:0
    }

    this.heading = "Home";
  }

  ngOnInit() {
    this.loadBlogs();

      let cacheUserId = localStorage.getItem("userId");
    this.userService.getUserData(cacheUserId)
      .subscribe((data) => {
          this.user = data;
          console.log(this.user);
      });

    this.categoryService.loadCategories()
      .subscribe((data) => {
          this.categories = data;
          console.log(this.categories);
      })
  }

  loadBlogs(){
    this.blogService.loadBlogs()
      .subscribe((data) => {
        this.blogs = data;
        this.filteredBlogs = this.blogs;
        this.heading = "Home";
        //console.log(this.blogs);
      });
  }

  getCategory(category){

    this.filteredBlogs = this.blogs.filter(blogs => blogs.categoryId === category.id);
    this.heading = category.name;
  }

  getHome(){
    this.filteredBlogs = this.blogs;
    this.heading = "Home";
  }

  getMyBlogs(){
    this.filteredBlogs = this.blogs.filter(blog => blog.authorId === this.user.id);
    this.heading = "My Blogs";
  }

  getFavourites(){

    let favId:any;
    let blog:any;
    let favBlogs:Object[] = [];

    for(favId of this.user.favourites){
      for(blog of this.blogs){
          if(blog.id === favId){
            favBlogs.push(blog);
          }
      }
    }

    this.filteredBlogs = favBlogs;
    this.heading = "Favourite Blogs";
  }

  AddNew(title,desc,category){

      let newBlog = {
        title:title,
        description:desc,
        authorId:this.user.id,
        categoryId:+category,
        date:new Date()
      }

      this.blogService.postBlog(newBlog)
        .subscribe((data) => {
            this.blogs.push(data);
            //console.log(this.blogs);
            this.loadBlogs();
        })
  }

  deletePost(blog){
    this.blogService.deleteBlog(blog)
      .subscribe((data) => {
          this.loadBlogs();
      })
  }

  updatePost(title,desc,category){
    let updatedBlog = {
      title:title,
      description:desc,
      authorId:this.user.id,
      categoryId:+category,
      date:new Date(),
      id:this.blogToBeUpdated.id
    }
    this.blogService.updateBlog(updatedBlog)
      .subscribe((data) => {
          this.loadBlogs();
      })
  }

  update(blog){
    this.blogToBeUpdated = blog;
  }

  markFav(blog){
    this.user.favourites.push(blog.id);
    this.userService.updateUserData(this.user)
      .subscribe((data) => {
          //this.loadBlogs();
      })
  }

  unmarkFav(blog){
    this.user.favourites = this.user.favourites.filter(favId => favId !== blog.id);
    this.userService.updateUserData(this.user)
      .subscribe((data) => {
          //this.loadBlogs();
        if(this.heading === "Favourite Blogs"){
          this.getFavourites();
        }
      })
  }
}
