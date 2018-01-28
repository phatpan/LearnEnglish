import { Component, OnInit } from '@angular/core';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-sentence',
  templateUrl: './sentence.component.html',
  styleUrls: ['./sentence.component.css']
})
export class SentenceComponent implements OnInit {

  constructor(private modalService: ModalService) { }

  ngOnInit() {
  }

  add() {
    this.modalService.addSentenceModal().result.then(() => {
      console.log('success');
    }, () => { });
  }
}
