import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { ContactFormComponent } from './contact-form/contact-form.component';

//import HeroesComponent then can use it in the routes array
const routes: Routes = [
  { path: 'heroes', component: HeroesComponent},
  { path: 'dashboard',component: DashboardComponent},
  { path: '', redirectTo: '/dashboard', pathMatch:'full'},
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'contact-form', component: ContactFormComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
