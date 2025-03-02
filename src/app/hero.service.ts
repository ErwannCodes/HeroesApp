import { Injectable } from '@angular/core';
import { HeroInfo } from './hero-info';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  url = 'https://akabab.github.io/superhero-api/api/all.json'
  constructor() { }

  async getAllHeroes(): Promise <HeroInfo[]>  {
    const data = await fetch(this.url);
    return await data.json() ?? [];
  }
  async getHeroById(id: number): Promise <HeroInfo | undefined> {
    const data = await this.getAllHeroes();
    return data.find(hero => hero.id === id);
  }
}

