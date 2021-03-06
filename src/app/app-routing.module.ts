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
  
  { path: 'search', loadChildren: () => import('./search/search.module').then(m => m.SearchModule)},
  
  { path: 'heroes-details/:id', loadChildren: () => import('./components/pages/heroes/heroes-details/heroes-details.module').then(m => m.HeroesDetailsModule) }];


@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
