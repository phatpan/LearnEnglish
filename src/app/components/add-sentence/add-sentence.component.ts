import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Category, CategoryInfo, SentenceInfo, Sentence } from '../../model/category';

@Component({
  selector: 'app-add-sentence',
  templateUrl: './add-sentence.component.html',
  styleUrls: ['./add-sentence.component.css']
})
export class AddSentenceComponent implements OnInit {
  @Input() dataEdit: SentenceInfo;
  @Input() categoryKey: string;
  categorys: AngularFireList<Category>;
  category: CategoryInfo[];
  constructor(public activeModal: NgbActiveModal, private db: AngularFireDatabase) {
    this.categorys = db.list('category');
  }

  ngOnInit() {
    this.getCategoryLanguage();
  }

  add(data: NgForm) {
    if (data.valid) {
      this.activeModal.close(data.value);
    }
  }

  getCategoryLanguage() {
    this.categorys.snapshotChanges().map(actions => {
      return actions.map(action => ({ key: action.key, value: action.payload.val() }));
    }).subscribe(items => {
      this.category = items;
    });
  }
}
