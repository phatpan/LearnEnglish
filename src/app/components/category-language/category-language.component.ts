import { Component, OnInit } from '@angular/core';
import { ModalService } from '../../services/modal.service';
import { Category } from '../../model/category';

@Component({
  selector: 'app-category-language',
  templateUrl: './category-language.component.html',
  styleUrls: ['./category-language.component.css']
})
export class CategoryLanguageComponent implements OnInit {

  constructor(private modalService: ModalService) { }

  ngOnInit() {
  }

  add() {
    this.modalService.addCategoryLanguageModal().result.then((data: Category) => {
      console.log(data.name);
    }, () => { });
  }
}
