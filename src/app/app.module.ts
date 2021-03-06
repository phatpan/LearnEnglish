import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { FirebaseService } from './services/firebase-service.service';
import { AngularFireModule } from 'angularfire2';
import { firebaseConfig } from '../environments/firebase.config';
import { HomeComponent } from './components/home/home.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CategoryLanguageComponent } from './components/category-language/category-language.component';
import { AddCategoryLanguageComponent } from './components/add-category-language/add-category-language.component';
import { ModalService } from './services/modal.service';
import { FormsModule } from '@angular/forms';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { SentenceComponent } from './components/sentence/sentence.component';
import { ComfirmationComponent } from './components/comfirmation/comfirmation.component';
import { AddSentenceComponent } from './components/add-sentence/add-sentence.component';
import { TrainingComponent } from './components/training/training.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    CategoryLanguageComponent,
    AddCategoryLanguageComponent,
    SentenceComponent,
    ComfirmationComponent,
    AddSentenceComponent,
    TrainingComponent
  ],
  imports: [
    BrowserModule,
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AppRoutingModule,
    NgbModule.forRoot(),
    FormsModule
  ],
  providers: [FirebaseService, ModalService],
  bootstrap: [AppComponent],
  entryComponents: [
    AddCategoryLanguageComponent,
    ComfirmationComponent,
    AddSentenceComponent
  ]
})
export class AppModule { }
