import { Component, OnInit } from '@angular/core';
import { ModalService } from '../../services/modal.service';
import { Category } from '../../model/category';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-category-language',
  templateUrl: './category-language.component.html',
  styleUrls: ['./category-language.component.css']
})
export class CategoryLanguageComponent implements OnInit {
  category: Observable<any[]>;
  constructor(private modalService: ModalService, private db: AngularFireDatabase) { }

  ngOnInit() {
    this.getCategoryLanguage();
  }

  add() {
    this.modalService.addCategoryLanguageModal().result.then((data: Category) => {
      this.db.list('category').push(data);
    }, () => { });
  }

  getCategoryLanguage() {
    this.category = this.db.list('category').valueChanges();
  }
}
