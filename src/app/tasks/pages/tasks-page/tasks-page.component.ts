import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Task } from '../../interfaces/task.interfaces';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'tasks-page',
  standalone: false,
  
  templateUrl: './tasks-page.component.html',
  styleUrl: './tasks-page.component.css'
})
export class TasksPageComponent implements OnInit {
  public pageDone!:boolean;

  public tasks!:Task[];

  public tasksFiltered!: Task[];

  public taskOpened:Task = {} as Task;

  public modalOpen:boolean = true;

  constructor(private route: ActivatedRoute, private tasksService:TaskService){}

  ngOnInit(): void {
     this.route.params.subscribe(params => {
      this.pageDone = params['taskType'] === 'true';
      if(this.tasks) {
        this.tasksFiltered = this.tasks.filter(element => element.completed === this.pageDone);
      }
     });

     this.tasksService.GettingAllTasks().subscribe(response => {
        this.tasks = response; 
        this.tasksFiltered = this.tasks.filter(element => element.completed === this.pageDone)
        console.log(this.tasksFiltered);
      });
  }
}
