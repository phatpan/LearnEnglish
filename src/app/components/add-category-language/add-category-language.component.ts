import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Category, CategoryInfo } from '../../model/category';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-add-category-language',
  templateUrl: './add-category-language.component.html',
  styleUrls: ['./add-category-language.component.css']
})
export class AddCategoryLanguageComponent implements OnInit {
  @Input() dataEdit: CategoryInfo;
  category: CategoryInfo;
  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
  }

  add(data: NgForm) {
    if (data.valid) {
      this.activeModal.close(data.value);
    }
  }
}
