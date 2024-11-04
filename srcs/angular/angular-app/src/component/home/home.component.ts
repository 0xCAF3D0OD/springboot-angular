import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  template: `
  <div (click)="goToMain()" class="clickable-area">
    <div class="container">
      <h1 class="text">Nous sommes deux étudiants de l'école 42 Lausanne, et nous avons entrepris ce projet pour approfondir notre connaissance des technologies Spring Boot et Angular. Notre objectif est de développer nos compétences pratiques en créant une application qui intègre un back-end et un front-end.</h1>
      <h1 class="text"> Cliquez pour continuer et découvrir notre travail !</h1>
    </div>
  </div>
  `,
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private router: Router) { }

  goToMain(): void {
    this.router.navigate(['/main'])
  }
}
