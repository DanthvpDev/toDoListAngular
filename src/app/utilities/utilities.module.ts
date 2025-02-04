import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { TaskCardsComponent } from './components/task-cards/task-cards.component';



@NgModule({
  declarations: [
    NavBarComponent,
    HomeComponent,
    TaskCardsComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    NavBarComponent,
    HomeComponent,
    TaskCardsComponent
  ]
})
export class UtilitiesModule { }
