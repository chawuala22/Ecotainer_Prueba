import { Component, OnInit } from '@angular/core';
import { Heroes } from '@app/shared/interfaces/heroes.interfaces';
import {Location} from '@angular/common';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss']
})
export class ListadoComponent implements OnInit {

  heroes: Heroes[]= [];
  notResult: boolean = false;

  constructor(private location:Location) { }

  ngOnInit(): void {
    
    if( localStorage.getItem("estammosBucando") === 'verdadero'){
      let heroesGuardado = localStorage.getItem("heroesBuscados");
      this.heroes = JSON.parse(heroesGuardado!);
      localStorage.clear()
      
    }else {
      this.notResult = true;
      
    }
    
    }

    onGoBack():void{
      this.location.back();
    }

}
