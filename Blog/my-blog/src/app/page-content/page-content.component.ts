import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-page-content',
  templateUrl: './page-content.component.html',
  styleUrls: ['./page-content.component.css']
})
export class PageContentComponent implements OnInit {

  @Input() heading:string;
  @Input() blogs:any;
  @Input() user:any;
  @Output() DeletePost: EventEmitter<any> = new EventEmitter();
  @Output() UpdatePost: EventEmitter<any> = new EventEmitter();
  @Output() MarkFav: EventEmitter<any> = new EventEmitter();
  @Output() UnMarkFav: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  getDelete(blog){
    this.DeletePost.emit(blog);
  }

  getUpdate(blog){
    this.UpdatePost.emit(blog);
  }

  getMarkFav(blog){
    this.MarkFav.emit(blog);
  }

  getUnmarkFav(blog){
    this.UnMarkFav.emit(blog);
  }

}
