import { Component, Input } from '@angular/core';
import { HeroInfo } from '../hero-info';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <section class="listing">
      <img class="hero-photo" [src]="heroInfo.images.lg" alt="Image of {{heroInfo.name}}">
      <h2 class="hero-name">{{heroInfo.name}}</h2>
      <ul class="attributes">
        <li>CBT <progress [value]="heroInfo.powerstats.combat" max= "100"></progress> </li>
        <li>DUR  <progress [value]="heroInfo.powerstats.durability" max= "100"></progress></li>
        <li>INT  <progress [value]="heroInfo.powerstats.intelligence" max= "100"></progress></li>
        <li>POW  <progress [value]="heroInfo.powerstats.power" max= "100"></progress></li>
        <li>SPD  <progress [value]="heroInfo.powerstats.speed" max= "100"></progress></li>
        <li>STR <progress [value]="heroInfo.powerstats.strength" max= "100"></progress></li>
      </ul>
      
      <a [routerLink]="['/hero',heroInfo.id]">Learn more</a>
    </section>
  `,
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  @Input() heroInfo!: HeroInfo;
}
