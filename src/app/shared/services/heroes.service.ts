import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Heroes } from '@shared/interfaces/heroes.interfaces';
import { environment } from './../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  private heroes: Heroes[] = [];

  constructor(private http: HttpClient) {
    this.http.get<Heroes[]>(`${environment.baseUrlAPI}/all.json`).subscribe(
      heroes => {
        this.heroes = heroes
      }
    )
  }

  loadHeroes(){
      return  this.http.get<Heroes[]>(`${environment.baseUrlAPI}/all.json`);
    }
      

  searchHeroes(query: string) {
    return this.http.get<Heroes[]>(`${environment.baseUrlAPI}/all.json`).subscribe(
      heroes => {

        let heroesArr: Heroes[] = [];
        query = query.toLowerCase();

        for (let heroe of heroes) {
          let nombre = heroe.name.toLowerCase();
          if (nombre.indexOf(query) >= 0) {
            heroesArr.push(heroe)
          }
        }
        if(heroesArr.length == 0){
          localStorage.removeItem("heroesBuscados");
          localStorage.setItem("estammosBucando", "falso");
        }else{
          localStorage.setItem("heroesBuscados", JSON.stringify(heroesArr));
          localStorage.setItem("estammosBucando", "verdadero");
        }
        this.heroes= heroesArr;
        console.log(this.heroes)
        
      }
    )



  }
  getDetails(id: number) {
    return this.http.get<Heroes>(`${environment.baseUrlAPI}/id/${id}.json`);
  }


}
