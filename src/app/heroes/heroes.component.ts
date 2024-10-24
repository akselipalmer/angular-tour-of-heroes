import { Component } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css',
})
export class HeroesComponent {
  heroes: Hero[] = [];
  selectedHero?: Hero;
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
  constructor(private heroService: HeroService) {}
  getHeros(): void {
    this.heroService.getHeroes().subscribe((heroes) => (this.heroes = heroes));
  }
  ngOnInit(): void {
    this.getHeros();
  }
}
