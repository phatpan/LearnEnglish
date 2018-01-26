import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase-service.service';
import { ProfileInfo } from '../../model/user-info';
import { Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private firebaseService: FirebaseService, private router: Router) { }

  ngOnInit() {
  }

  loginWithFacebook() {
    this.firebaseService.loginWithFacebook().then((response: ProfileInfo) => {
      this.router.navigate(['/home']);
    });
  }

}
