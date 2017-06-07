import { NgModule } from '@angular/core';
import { RouterModule, Routes }   from '@angular/router';

import { HeroDetailComponent } from './hero-detail.component';
import { HeroListComponent } from './hero-list.component';
import { DashboardComponent } from './dashboard.component'

const routes: Routes = [
  { path: 'heroes', component: HeroListComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: '', redirectTo: '/dashboard',pathMatch: 'full'},
  { path: 'detail/:id', component: HeroDetailComponent},
 ]

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class MyRouteModule{
	
}