import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroesDetailsComponent } from './heroes-details/heroes-details.component';
import { HeroesListComponent } from './heroes-list/heroes-list.component';
import { RouterModule } from '@angular/router';




@NgModule({
  declarations: [
    HeroesDetailsComponent,
    HeroesListComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[HeroesDetailsComponent, HeroesListComponent]
})
export class HeroesModule { }
