import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Category } from '../../model/category';

@Component({
  selector: 'app-add-sentence',
  templateUrl: './add-sentence.component.html',
  styleUrls: ['./add-sentence.component.css']
})
export class AddSentenceComponent implements OnInit {
  categorys: AngularFireList<Category>;
  constructor(public activeModal: NgbActiveModal, private db: AngularFireDatabase) { 
    this.categorys = db.list('category');
  }

  ngOnInit() {
  }

  add(data: NgForm) {
    if (data.valid) {
     this.activeModal.close();
    }
  }

  getCategoryLanguage() {
    this.categorys.snapshotChanges().map(actions => {
      return actions.map(action => ({ key: action.key, value: action.payload.val() }));
    }).subscribe(items => {
      //this.category = items;
    });
  }
}
