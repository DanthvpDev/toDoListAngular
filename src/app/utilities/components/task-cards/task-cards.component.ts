import { Component, Input } from '@angular/core';

@Component({
  selector: 'util-task-cards',
  standalone: false,
  
  templateUrl: './task-cards.component.html',
  styleUrl: './task-cards.component.css'
})
export class TaskCardsComponent {
  @Input()
  public id:number = 0;
  
  @Input()
  public title:string = '';

  @Input()
  public background!:string;
}
