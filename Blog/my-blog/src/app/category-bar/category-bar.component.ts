import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CategoryService} from "../category-service/category.service";

@Component({
  selector: 'app-category-bar',
  templateUrl: './category-bar.component.html',
  styleUrls: ['./category-bar.component.css']
})
export class CategoryBarComponent implements OnInit {

  @Input() categories;
  @Output() Category: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  setCategory(category){
    this.Category.emit(category);
  }
}
