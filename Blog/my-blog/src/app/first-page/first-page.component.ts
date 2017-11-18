import { Component, OnInit } from '@angular/core';
import {BlogService} from "../blog-service/blog.service";
import {UserService} from "../user-service/user.service";

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.css']
})
export class FirstPageComponent implements OnInit {

  private users:any;
  private blogs:any;
  constructor(private blogService:BlogService,private userService:UserService) { }

  ngOnInit() {
    this.blogService.loadBlogs()
      .subscribe((data) => {
          this.blogs = data;
          console.log(this.blogs);
      });

    this.userService.getUsersData()
      .subscribe((data) => {
        this.users = data;
        console.log(this.users);
      });
  }

}
