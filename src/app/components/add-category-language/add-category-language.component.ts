import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Category, Categorys } from '../../model/category';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-add-category-language',
  templateUrl: './add-category-language.component.html',
  styleUrls: ['./add-category-language.component.css']
})
export class AddCategoryLanguageComponent implements OnInit {
  @Input() dataEdit: Categorys;
  category: Categorys;
  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
    if (this.dataEdit) {
      this.category = this.dataEdit;
    }
  }

  add(data: NgForm) {
    if (data.valid) {
      this.category.value = data.value;
      this.activeModal.close(this.category);
    }
  }
}
