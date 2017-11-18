import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginBarComponent } from './login-bar/login-bar.component';
import { CategoryBarComponent} from "./category-bar/category-bar.component";

import { UserService } from "./user-service/user.service";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {RouterModule} from "@angular/router";
import { DashboardComponent } from './dashboard/dashboard.component';
import { FirstPageComponent } from './first-page/first-page.component';
import {CategoryService} from "./category-service/category.service";
import { PostCardComponent } from './post-card/post-card.component';
import {BlogService} from "./blog-service/blog.service";
import { PageContentComponent } from './page-content/page-content.component';
import { SideBarComponent } from './side-bar/side-bar.component';



const approutes = [
  {path:'', component:FirstPageComponent},
  {path:'dashboard', component:DashboardComponent},
  {path:'**',redirectTo:'', component:FirstPageComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    LoginBarComponent,
    CategoryBarComponent,
    DashboardComponent,
    FirstPageComponent,
    PostCardComponent,
    PageContentComponent,
    SideBarComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(approutes)
  ],
  providers: [
    UserService,
    CategoryService,
    BlogService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
