import { Component, Input } from '@angular/core';
import { Task } from '../../../tasks/interfaces/task.interfaces';

@Component({
  selector: 'util-nav-bar',
  standalone: false,
  
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
  public taskType!:boolean;

}
