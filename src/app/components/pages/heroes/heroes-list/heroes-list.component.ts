import { Component, OnInit } from '@angular/core';
import { Heroes } from '@app/shared/interfaces/heroes.interfaces';
import { HeroesService } from '@app/shared/services/heroes.service';
import {take} from "rxjs/operators";

@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.scss']
})
export class HeroesListComponent implements OnInit {
  heroes: Heroes[]= [];
  estamosBuscando: boolean = false;


  constructor(private heroesSvc: HeroesService) { }

  ngOnInit(): void {

    if( localStorage.getItem("estammosBucando") == "falso"){
      console.log("entramos");
      
      console.log(localStorage.getItem("heroesBuscados"));      
    }else {
      console.log("salimos");
      
      this.heroesSvc.loadHeroes().subscribe(
      
        heroes=>{
          for(let he=0; he <=20; he++ ){
            const ramdom = Math.round(Math.random()*250);
            this.heroes.push(heroes[ramdom]);
  
          }
        }
      )
    }
   
    
    
  }



 /*  private getDataFromService():void{
    this.heroesSvc.searchHeroes(this.query)
    .pipe(
      take(1)
    ).subscribe((res:any)=>{
      this.heroes=[...this.heroes]
    })
  } */

}
