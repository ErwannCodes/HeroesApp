import { HeroInfo } from './../hero-info';
import { HeroService } from '../hero.service';
import { Component, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from '../hero/hero.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HeroComponent],
  template: `
    <section class="search">
      <form action="">
        <input type="text" placeholder="Enter a name to search" (input)="filterResults($event)" #filter>
      </form>
    </section>
    <section class="results">
      <app-hero *ngFor="let hero of filteredHeroList" [heroInfo]="hero"></app-hero>
    </section>
  `,
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  heroList: HeroInfo[] = [];
  heroService: HeroService = inject(HeroService);
  filteredHeroList: HeroInfo[] = [];

  constructor() {
    this.heroService.getAllHeroes().then((heroList: HeroInfo[]) => {
      this.heroList = heroList;
      this.filteredHeroList = heroList;
    })
  }

  filterResults(event: Event) {
    if (!event) this.filteredHeroList = this.heroList;

    const inputElement = event.target as HTMLInputElement; 
    const searchTerm = inputElement.value.toLowerCase();
    this.filteredHeroList = this.heroList.filter(hero =>
      hero?.name.toLowerCase().includes(searchTerm) 
    );
  }
}
