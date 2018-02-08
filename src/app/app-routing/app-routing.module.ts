import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';
import { LoginComponent } from '../components/login/login.component';
import { CategoryLanguageComponent } from '../components/category-language/category-language.component';
import { SentenceComponent } from '../components/sentence/sentence.component';
import { TrainingComponent } from '../components/training/training.component';

const routes: Routes = [
  { path: 'sentence', component: SentenceComponent },
  { path: 'categoryLanguages', component: CategoryLanguageComponent },
  { path: 'home', component: HomeComponent },
  { path: 'training', component: TrainingComponent },
  { path: '', component: LoginComponent },
  { path: '**', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }