import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ToastrModule, Toast } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import * as firebase from 'firebase';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFireAuthModule } from '@angular/fire/auth'
import { AngularFireDatabaseModule } from '@angular/fire/database'



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SigninComponent } from './components/auth/signin/signin.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { LandingComponent } from './components/landing/landing.component';
import { CollectibleCreateComponent } from './components/collectible/collectible-create/collectible-create.component';
import { CollectibleDetailsComponent } from './components/collectible/collectible-details/collectible-details.component';
import { CollectibleEditComponent } from './components/collectible/collectible-edit/collectible-edit.component';
import { CollectibleAllComponent } from './components/collectible/collectible-all/collectible-all.component';
import { HeaderComponent } from './components/shared/header/header.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SigninComponent,
    SignupComponent,
    LandingComponent,
    CollectibleCreateComponent,
    CollectibleDetailsComponent,
    CollectibleEditComponent,
    CollectibleAllComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    FormsModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
