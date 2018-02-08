import { Component, OnInit } from '@angular/core';
import { ModalService } from '../../services/modal.service';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import { Category, Sentence, CategoryInfo, SentenceInfo } from '../../model/category';

@Component({
  selector: 'app-sentence',
  templateUrl: './sentence.component.html',
  styleUrls: ['./sentence.component.css']
})
export class SentenceComponent implements OnInit {
  categoryList: AngularFireList<Category>;
  category: CategoryInfo[];
  sentenceList: AngularFireList<Sentence>;
  sentence: SentenceInfo[];
  selectKeyCategory: string;
  constructor(private modalService: ModalService, private db: AngularFireDatabase) {
    this.categoryList = db.list('category');
  }

  ngOnInit() {
    this.getCategoryLanguage();
  }

  searchSentenceByCategory(event) {
    this.selectKeyCategory = event.target.value;
    this.db.list('category/' + this.selectKeyCategory + '/sentence').snapshotChanges().map(actions => {
      return actions.map(action => ({ key: action.key, value: action.payload.val() }));
    }).subscribe((items) => {
      this.sentence = items;
    });
  }

  getCategoryLanguage() {
    this.categoryList.snapshotChanges().map(actions => {
      return actions.map(action => ({ key: action.key, value: action.payload.val() }));
    }).subscribe(items => {
      this.category = items;
    });
  }

  add() {
    this.modalService.sentenceModal().result.then((response: Sentence, ) => {
      this.db.list('category/' + response.category + '/sentence').push(
        { 'name': response.name, 'thaiTranslation': response.thaiTranslation, 'read': response.read });
    }, () => { });
  }

  edit(data: SentenceInfo) {
    this.modalService.sentenceModal(data, this.selectKeyCategory).result.then((response: Sentence) => {
      this.db.list('category/' + this.selectKeyCategory + '/sentence').update(
        data.key,
        { 'name': response.name, 'thaiTranslation': response.thaiTranslation, 'read': response.read });
    }, () => { });
  }

  delete(data: SentenceInfo) {
    this.modalService.comfirmationModal('จัดการข้อมูลกลุ่มของการเรียนภาษา', 'คุณต้องการลบข้อมูลหรือไม่ ?').result.then(() => {
      this.db.list('category/' + this.selectKeyCategory + '/sentence/' + data.key).remove();
    }, () => { });
  }
}
