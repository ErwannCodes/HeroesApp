import { HeroInfo } from '../hero-info';
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { HeroService } from '../hero.service';


@Component({
  selector: 'app-details', 
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
  <button class="gray" type="button" [routerLink]="'/'">Back</button>
   <article>
      <img class="hero-photo" [src]="hero?.images?.sm" alt="">
      <section class="hero-description">
        <h2 class="hero-heading">
          {{ hero?.name }}
        </h2>pri
      </section>
      <section class="hero-features">
      <h3>Biography</h3>
        <ul>
          <li>Full Name: {{hero?.biography?.fullName}}</li>
          <li>Alter Egos: {{hero?.biography?.alterEgos}}</li>
          <li>Aliases: {{hero?.biography?.aliases}}</li>
          <li>Place Of Birth: {{hero?.biography?.placeOfBirth}}</li>
          <li>First Appearance: {{hero?.biography?.firstAppearance}}</li>
          <li>Publisher: {{hero?.biography?.publisher}}</li>
          <li>Alignment: {{hero?.biography?.alignment}}</li>
        </ul>  
        <h3>Power Stats</h3>
        <ul>
          <li>Intelligence: {{hero?.powerstats?.intelligence}}</li>
          <li>Strength: {{hero?.powerstats?.strength}}</li>
          <li>Speed: {{hero?.powerstats?.speed}}</li>
          <li>Durability: {{hero?.powerstats?.durability}}</li>
          <li>Power: {{hero?.powerstats?.power}}</li>
          <li>Combat: {{hero?.powerstats?.combat}}</li>
        </ul>  
        <h3>Appearance</h3>
        <ul>
          <li>Gender: {{hero?.appearance?.gender}}</li>
          <li>Race: {{hero?.appearance?.race}}</li>
          <li>Height: {{hero?.appearance?.height}}</li>
          <li>Weight: {{hero?.appearance?.weight}}</li>
          <li>Eye Color: {{hero?.appearance?.eyeColor}}</li>
          <li>Hair Color: {{hero?.appearance?.hairColor}}</li>
        </ul>  
        <h3>Connections</h3>
        <ul>
          <li>Group Affiliation: {{hero?.connections?.groupAffiliation}}</li>
          <li>Relatives: {{hero?.connections?.relatives}}</li>
        </ul>
        <h3>Work</h3>
        <ul>
          <li>Occupation: {{hero?.work?.occupation}}</li>
          <li>Base: {{hero?.work?.base}}</li>
        </ul>
        </section>
   </article>
  `,
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute)
  heroService = inject(HeroService);
  hero: HeroInfo | undefined;


  constructor() {
    const heroId = Number(this.route.snapshot.params['id']);
    this.heroService.getHeroById(heroId).then(heroInfo => {
      this.hero = heroInfo;
    })
  }
}
