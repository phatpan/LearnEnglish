import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryLanguageComponent } from './category-language.component';

describe('CategoryLanguageComponent', () => {
  let component: CategoryLanguageComponent;
  let fixture: ComponentFixture<CategoryLanguageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoryLanguageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryLanguageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
