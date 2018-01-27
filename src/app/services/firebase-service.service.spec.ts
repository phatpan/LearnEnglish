import { TestBed, inject } from '@angular/core/testing';

import { FirebaseService } from './firebase-service.service';
import { ServiceBuilder } from 'selenium-webdriver/chrome';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireModule } from 'angularfire2';
import { firebaseConfig } from '../../environments/firebase.config';

describe('FirebaseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FirebaseService],
      imports: [
        AngularFireAuthModule,
        AngularFireModule.initializeApp(firebaseConfig)]
    });
  });

  it('should be created', inject([FirebaseService], (service: FirebaseService) => {
    expect(service).toBeTruthy();
  }));

  // it('should login with facebook', () => {
  //   expect(service.loginWithFacebook).toHaveBeenCalled
  // });
});
