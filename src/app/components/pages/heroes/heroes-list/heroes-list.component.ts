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


  constructor(private heroesSvc: HeroesService) { }

  ngOnInit(): void {

      
      this.heroesSvc.loadHeroes().subscribe(
      
        heroes=>{
          let cantidadNumeros = 20;
          let myArray: number[] = []
          while(myArray.length < cantidadNumeros ){
            var numeroAleatorio = Math.ceil(Math.random()*250);
            var existe = false;
            for(var i=0;i<myArray.length;i++){
            if(myArray [i] == numeroAleatorio){
                  existe = true;
                  break;
              }
            }
            if(!existe){
              myArray[myArray.length] = numeroAleatorio;
            }
          }
          for(let he=0; he <20; he++ ){
            this.heroes.push(heroes[myArray[he]]);
          }
        }
      )
    
   
    
    
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
