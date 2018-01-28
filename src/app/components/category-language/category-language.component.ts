import { Component, OnInit } from '@angular/core';
import { ModalService } from '../../services/modal.service';
import { Category, Categorys } from '../../model/category';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-category-language',
  templateUrl: './category-language.component.html',
  styleUrls: ['./category-language.component.css']
})
export class CategoryLanguageComponent implements OnInit {
  categorys: AngularFireList<Category>;
  category: Categorys[];
  constructor(private modalService: ModalService, private db: AngularFireDatabase) {
    this.categorys = db.list('category');
  }

  ngOnInit() {
    this.getCategoryLanguage();
  }

  add() {
    this.modalService.addCategoryLanguageModal().result.then((data: Category) => {
      this.categorys.push(data);
    }, () => { });
  }

  getCategoryLanguage() {
    this.categorys.snapshotChanges().map(actions => {
      return actions.map(action => ({ key: action.key, value: action.payload.val() }));
    }).subscribe(items => {
      this.category = items;
    });
  }

  delete(data: Categorys) {
    this.categorys.remove(data.key).then(() => {
    });
  }
}
