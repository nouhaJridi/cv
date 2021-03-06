import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';

import { CardComponent } from './cv/components/card/card.component';
import { DefaultImagePipe } from './cv/components/pipes/default-image.pipe';
import { ColorDirectiveDirective } from './cv/components/directive/color-directive.directive';
import { DirectiveComponent } from './cv/components/directive/directive.component';
import { CvComponentComponent } from './cv/pages/cv-component/cv-component.component';
import { ListeComponentComponent } from './cv/components/liste-component/liste-component.component';
import { ItemComponentComponent } from './cv/components/item-component/item-component.component';
import { EmbaucheComponentComponent } from './cv/components/embauche-component/embauche-component.component';
import { NavBarComponent } from './cv/components/nav-bar/nav-bar.component';
import { FouterComponent } from './cv/components/fouter/fouter.component';
import { LoginComponent } from './cv/pages/login/login.component';
import { HomeComponent } from './cv/pages/home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    ListeComponentComponent,
    ItemComponentComponent,
    CvComponentComponent,
    DirectiveComponent,
    ColorDirectiveDirective,
    DefaultImagePipe,
    EmbaucheComponentComponent,
    NavBarComponent,
    FouterComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
