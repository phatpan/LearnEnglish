import { Injectable } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { AddCategoryLanguageComponent } from '../components/add-category-language/add-category-language.component';
import { ComfirmationComponent } from '../components/comfirmation/comfirmation.component';
import { AddSentenceComponent } from '../components/add-sentence/add-sentence.component';

@Injectable()
export class ModalService {

  constructor(private modalService: NgbModal) { }

  addCategoryLanguageModal(): NgbModalRef {
    return this.modalService.open(AddCategoryLanguageComponent);
  }

  addSentenceModal() {
    return this.modalService.open(AddSentenceComponent);
  }

  comfirmationModal(title: string, content: string) {
    const modal = this.modalService.open(ComfirmationComponent);
    modal.componentInstance.title = title;
    modal.componentInstance.content = content;
    return modal;
  }
}
