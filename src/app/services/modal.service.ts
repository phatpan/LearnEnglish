import { Injectable } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { AddCategoryLanguageComponent } from '../components/add-category-language/add-category-language.component';

@Injectable()
export class ModalService {

  constructor(private modalService: NgbModal) { }

  addCategoryLanguageModal(): NgbModalRef {
    return this.modalService.open(AddCategoryLanguageComponent);
  }
}
