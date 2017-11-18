import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.css']
})
export class PostCardComponent implements OnInit {

  @Input() blog;
  @Input() user;
  @Output() DeletePost: EventEmitter<any> = new EventEmitter();
  @Output() UpdatePost: EventEmitter<any> = new EventEmitter();
  @Output() MarkFav: EventEmitter<any> = new EventEmitter();
  @Output() UnmarkFav: EventEmitter<any> = new EventEmitter();

  private showFav:boolean;
  private showButtons:boolean;
  constructor() {
    this.showFav = false;
    this.showButtons = false;
  }

  ngOnInit() {
    if(localStorage.getItem("userId") == this.blog.authorId){
      this.showButtons = true;
    }

    if(localStorage.getItem("isloggedin") === "true"){
      let entry:any;
      for(entry of this.user.favourites){
        if(this.blog.id === entry){
          this.showFav = true;
          console.log(this.showFav);
          break;
        }
      }
    }
  }

  setDelete(blog){
    this.DeletePost.emit(blog);
  }

  setUpdate(blog){
    this.UpdatePost.emit(blog);
  }

  setMarkFav(blog){
    this.MarkFav.emit(blog);
    this.showFav = true;
  }

  setUnmarkFav(blog){
    this.UnmarkFav.emit(blog);
    this.showFav = false;
  }
}
