import { Component, OnInit } from '@angular/core';

import { HeroService } from '../hero.service';
import { Hero } from '../hero';
// import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  //define a component property called heores to expose the HEROES array for binding
  //heroes = HEROES;
  
  //display heroes
  heroes: Hero[] = [];

  constructor(private heroService: HeroService) {}

  ngOnInit() {
    this.getHeroes();
  }

  // selectedHero?: Hero;

  // onSelect(hero: Hero): void {
  //   this.selectedHero = hero;
  //   this.messageService.add('HeroesComponent: Selected hero id=${hero.id}');
  // }

  // getHeroes(): void{
    // this.heroes = this.heroService.getHeroes();
  // }

  getHeroes(): void{
    this.heroService.getHeroes()
        .subscribe(heroes=> this.heroes=heroes);
  }

  add(name: string): void {
    name = name.trim();
    if(!name) {return;}
    this.heroService.addHero({ name } as Hero)
        .subscribe(hero=> {
          this.heroes.push(hero);
        });
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero.id).subscribe();
  }
}