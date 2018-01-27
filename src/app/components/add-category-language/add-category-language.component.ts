import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Category } from '../../model/category';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-add-category-language',
  templateUrl: './add-category-language.component.html',
  styleUrls: ['./add-category-language.component.css']
})
export class AddCategoryLanguageComponent implements OnInit {
  category: Category;
  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
  }

  add(data: NgForm) {
    if (data.valid) {
     this.category = data.value;
     this.activeModal.close(this.category);
    }
  }
}
