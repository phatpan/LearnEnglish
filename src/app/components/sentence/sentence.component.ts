import { Component, OnInit } from '@angular/core';
import { ModalService } from '../../services/modal.service';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import { Category, Sentence } from '../../model/category';

@Component({
  selector: 'app-sentence',
  templateUrl: './sentence.component.html',
  styleUrls: ['./sentence.component.css']
})
export class SentenceComponent implements OnInit {
  categoryList: AngularFireList<Sentence>;
  constructor(private modalService: ModalService, private db: AngularFireDatabase) {
    this.categoryList = db.list('category');
  }

  ngOnInit() {
  }

  add() {
    this.modalService.addSentenceModal().result.then((response: Sentence) => {
      this.db.object('category/' + response.category).update(response);
     // this.categoryList.update(response.category, response);
      console.log('success');
    }, () => { });
  }
}
