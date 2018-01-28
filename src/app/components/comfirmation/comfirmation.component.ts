import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-comfirmation',
  templateUrl: './comfirmation.component.html',
  styleUrls: ['./comfirmation.component.css']
})
export class ComfirmationComponent implements OnInit {
  @Input() title: string;
  @Input() content: string;
  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
  }

}
