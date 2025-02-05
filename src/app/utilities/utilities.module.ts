import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { TaskCardsComponent } from './components/task-cards/task-cards.component';
import { ModalComponent } from './components/modal/modal.component';



@NgModule({
  declarations: [
    NavBarComponent,
    HomeComponent,
    TaskCardsComponent,
    ModalComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    NavBarComponent,
    HomeComponent,
    TaskCardsComponent,
    ModalComponent
  ]
})
export class UtilitiesModule { }
