import { Component, OnInit } from '@angular/core';
import { ModalService } from '../../services/modal.service';
import { Category, CategoryInfo } from '../../model/category';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-category-language',
  templateUrl: './category-language.component.html',
  styleUrls: ['./category-language.component.css']
})
export class CategoryLanguageComponent implements OnInit {
  categoryList: AngularFireList<Category>;
  category: CategoryInfo[];
  constructor(private modalService: ModalService, private db: AngularFireDatabase) {
    this.categoryList = db.list('category');
  }

  ngOnInit() {
    this.getCategoryLanguage();
  }

  add() {
    this.modalService.categoryLanguageModal().result.then((response: Category) => {
      this.categoryList.push(response);
    }, () => { });
  }

  getCategoryLanguage() {
    this.categoryList.snapshotChanges().map(actions => {
      return actions.map(action => ({ key: action.key, value: action.payload.val() }));
    }).subscribe(items => {
      this.category = items;
    });
  }

  delete(data: CategoryInfo) {
    this.modalService.comfirmationModal('จัดการข้อมูลกลุ่มของการเรียนภาษา', 'คุณต้องการลบข้อมูลหรือไม่ ?').result.then(() => {
      this.categoryList.remove(data.key);
    }, () => { });
  }

  edit(data: CategoryInfo) {
    this.modalService.categoryLanguageModal(data).result.then((response: Category) => {
      this.categoryList.update(data.key, response);
    }, () => { });
  }
}
