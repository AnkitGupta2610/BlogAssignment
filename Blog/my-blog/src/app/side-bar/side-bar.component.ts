import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  @Output() Home: EventEmitter<any> = new EventEmitter();
  @Output() MyBlogs: EventEmitter<any> = new EventEmitter();
  @Output() Favourites: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  setHome(){
    this.Home.emit("Display Home");
  }

  setMyBlogs(){
    this.MyBlogs.emit("Display My Blogs");
  }

  setFavourites(){
    this.Favourites.emit("Display Favourites");
  }
}
