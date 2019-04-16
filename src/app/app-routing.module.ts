import { NgModule } from '@angular/core';
import { Routes, RouterModule, Route } from '@angular/router';
import { SigninComponent } from './components/auth/signin/signin.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { LandingComponent } from './components/landing/landing.component';
import { CollectibleAllComponent } from './components/collectible/collectible-all/collectible-all.component';
import { CollectibleCreateComponent } from './components/collectible/collectible-create/collectible-create.component';
import { CollectibleDetailsComponent } from './components/collectible/collectible-details/collectible-details.component';
import { CollectibleEditComponent } from './components/collectible/collectible-edit/collectible-edit.component';

const routes: Route[] = [
  { path: 'auth', children: [
    { path: 'login', component: SigninComponent },
    { path: 'register', component: SignupComponent }
  ]},
  { path: '', pathMatch: 'full', component: LandingComponent},
  { path: 'collectibles', children: [
    { path: 'all', component: CollectibleAllComponent },
    { path: 'create', component: CollectibleCreateComponent },
    { path: 'details/:id', component: CollectibleDetailsComponent },
    { path: 'edit/:id', component: CollectibleEditComponent },
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
