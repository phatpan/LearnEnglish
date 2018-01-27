import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import { FirebaseService } from '../../services/firebase-service.service';
import { AngularFireModule } from 'angularfire2';
import { firebaseConfig } from '../../../environments/firebase.config';
import { AppRoutingModule } from '../../app-routing/app-routing.module';
import { CategoryLanguageComponent } from '../category-language/category-language.component';
import { HomeComponent } from '../home/home.component';
import { APP_BASE_HREF } from '@angular/common';
import { Observable } from 'rxjs/Observable';
import { User, ProfileInfo } from '../../model/user-info';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let firebaseService: FirebaseService;
  beforeEach(() => {
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
        { provide: APP_BASE_HREF, useValue: '/' }]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    firebaseService = fixture.debugElement.injector.get(FirebaseService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call login with facebook when click facebook', () => {
    let mockDataUser: User;
    let mockData: ProfileInfo;
    mockDataUser = {
      displayName: 'Phatcharaphan ananpreechakun',
      email: 'phat.pan@gmail.com'
    };
    mockData = {
      user: mockDataUser
    };
    spyOn(firebaseService, 'loginWithFacebook').and.returnValue(Promise.resolve(mockData));
    component.loginWithFacebook();
    expect(firebaseService.loginWithFacebook).toHaveBeenCalled();
  });
});
