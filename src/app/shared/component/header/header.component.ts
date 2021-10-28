import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  herelist:boolean = true;

  constructor(private router: Router) { }

  ngOnInit(): void {

    this.router.events
  .pipe(
    filter((e: any) => e instanceof NavigationEnd)
  )
  .subscribe( (navEnd:NavigationEnd) => {
    if(navEnd.urlAfterRedirects != '/heroes-list'){
      this.herelist= false;
    }else{
      this.herelist=true;
    }
  });
    
    
    

  }

}
