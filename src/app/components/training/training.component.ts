import { Component, OnInit } from '@angular/core';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import { CategoryInfo, Category, SentenceInfo, Sentence } from '../../model/category';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.css']
})
export class TrainingComponent implements OnInit {

  categoryList: AngularFireList<Category>;
  category: CategoryInfo[];
  sentence: SentenceInfo[];
  sentenceDisplay: Sentence;
  initialStep: number;
  constructor(private db: AngularFireDatabase) {
    this.categoryList = db.list('category');
  }

  ngOnInit() {
    this.initialStep = 0;
    this.getCategoryLanguage();
  }

  getCategoryLanguage() {
    this.categoryList.snapshotChanges().map(actions => {
      return actions.map(action => ({ key: action.key, value: action.payload.val() }));
    }).subscribe(items => {
      this.category = items;
    });
  }

  searchSentenceByCategory(event) {
    this.db.list('category/' + event.target.value + '/sentence').snapshotChanges().map(actions => {
      return actions.map(action => ({ key: action.key, value: action.payload.val() }));
    }).subscribe((items) => {
      this.sentence = items;
      this.nextSentence(0);
    });
  }

  nextSentence(step: number) {
    if (this.initialStep <= step) {
      this.sentence.forEach((data, index) => {
        if (step === index) {
          this.sentenceDisplay = data.value;
        }
      });
      this.initialStep += 1;
    }
  }

  newStep() {
    this.sentence = undefined;
    this.initialStep = 0;
  }
}
