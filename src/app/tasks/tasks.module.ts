import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksPageComponent } from './pages/tasks-page/tasks-page.component';
import { UtilitiesModule } from '../utilities/utilities.module';





@NgModule({
  declarations: [
    TasksPageComponent
  ],
  imports: [
    CommonModule,
    UtilitiesModule
  ],
  exports: [
    TasksPageComponent
  ]
})
export class TasksModule { }
