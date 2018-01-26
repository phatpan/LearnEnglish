import { TestBed, inject } from '@angular/core/testing';

import { FirebaseServiceService } from './firebase-service.service';
import { ServiceBuilder } from 'selenium-webdriver/chrome';

describe('FirebaseServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FirebaseServiceService]
    });
  });

  it('should be created', inject([FirebaseServiceService], (service: FirebaseServiceService) => {
    expect(service).toBeTruthy();
  }));

  // it('should login with facebook', () => {
  //   expect(service.loginWithFacebook).toHaveBeenCalled
  // });
});
