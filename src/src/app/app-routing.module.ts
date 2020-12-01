import { HomeComponent } from './cv/pages/home/home.component';
import { LoginComponent } from './cv/pages/login/login.component';
import { CvComponentComponent } from './cv/pages/cv-component/cv-component.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'cv', component: CvComponentComponent},
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
