import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    template: `
  <app-title [subtitle]="subtitle"></app-title>
  <nav>
    <a routerLink="contact" routerLinkActive="active">Contact</a>
    <a routerLink="crisis"  routerLinkActive="active">Crisis Center</a>
    <a routerLink="heroes"  routerLinkActive="active">Heroes</a>
  </nav>
 <!--<router-outlet></router-outlet>-->

  <h1>{{title}}</h1>
  <nav>
    <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
    <a routerLink="/heroes" routerLinkActive="active">Heroes</a>
  </nav>
  <router-outlet></router-outlet>
`,

   styleUrls: ['app.component.css'],

})

export class AppComponent {
    title = 'Angular Tour of Heroes'
    subtitle = '(v1)'
}