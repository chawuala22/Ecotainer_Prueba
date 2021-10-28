import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    redirectTo:'/heroes-list',
    pathMatch:'full',
  },
  // { path: 'home', loadChildren: () => import('./components/pages/home/home.module').then(m => m.HomeModule) },
  
  { path: 'heroes-list', loadChildren: () => import('./components/pages/heroes/heroes-list/heroes-list.module').then(m => m.HeroesListModule) }, 
  
  { path: 'heroes-details/:id', loadChildren: () => import('./components/pages/heroes/heroes-details/heroes-details.module').then(m => m.HeroesDetailsModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
