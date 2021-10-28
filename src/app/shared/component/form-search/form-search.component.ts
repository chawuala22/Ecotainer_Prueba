import { query } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeroesService } from '@app/shared/services/heroes.service';

@Component({
  selector: 'app-form-search',
  template:`
  <input
  #inputSearch
  autofocus="text"
  class="form-control-lg"
  placeholder="Search....."
  (keyup)="onSearch(inputSearch.value)"
  />
  `,
  styles: ['input {width:100%}'],
})
export class FormSearchComponent implements OnInit {

  constructor(private router:Router, private heroesService:HeroesService) { }

  ngOnInit(): void {
  }

  onSearch(value:string){
    console.log('buscar->',value);
    
    if(value && value.length>3){
      this.heroesService.searchHeroes(value)
      this.router.navigate(['/heroes-list'],{queryParams:{q:value}});
    }


  }

}
