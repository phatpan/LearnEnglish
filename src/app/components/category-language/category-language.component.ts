import { Component, OnInit } from '@angular/core';
import { ModalService } from '../../services/modal.service';
import { Category } from '../../model/category';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-category-language',
  templateUrl: './category-language.component.html',
  styleUrls: ['./category-language.component.css']
})
export class CategoryLanguageComponent implements OnInit {

  constructor(private modalService: ModalService, private db: AngularFireDatabase) { }

  ngOnInit() {
  }

  add() {
    this.modalService.addCategoryLanguageModal().result.then((data: Category) => {
      this.db.list('category').push(data);
    }, () => { });
  }
}
