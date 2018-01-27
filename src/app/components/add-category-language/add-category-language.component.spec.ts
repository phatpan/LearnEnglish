import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCategoryLanguageComponent } from './add-category-language.component';

describe('AddCategoryLanguageComponent', () => {
  let component: AddCategoryLanguageComponent;
  let fixture: ComponentFixture<AddCategoryLanguageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCategoryLanguageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCategoryLanguageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
