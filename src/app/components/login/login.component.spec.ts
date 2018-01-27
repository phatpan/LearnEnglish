import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { FirebaseService } from '../../services/firebase-service.service';
import { AngularFireModule } from 'angularfire2';
import { firebaseConfig } from '../../../environments/firebase.config';
import { AppRoutingModule } from '../../app-routing/app-routing.module';
import { CategoryLanguageComponent } from '../category-language/category-language.component';
import { HomeComponent } from '../home/home.component';
import { APP_BASE_HREF } from '@angular/common';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        LoginComponent,
        CategoryLanguageComponent,
        HomeComponent],
      imports: [
        AngularFireAuthModule,
        AngularFireModule.initializeApp(firebaseConfig),
        AppRoutingModule
      ],
      providers: [
        FirebaseService,
        { provide: APP_BASE_HREF, useValue : '/' }]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
