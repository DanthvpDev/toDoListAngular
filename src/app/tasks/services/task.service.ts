import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';
import { Task } from '../interfaces/task.interfaces';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private API_URL: string = 'https://jsonplaceholder.typicode.com/todos';

  constructor(private http: HttpClient) { }

  public GettingAllTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.API_URL).pipe(
      map(element => element.map(task => 
        ({
          userId: task.userId,
          id: task.id,
          title: task.title,
          completed: task.completed
        })
      )),
      catchError(error => of([]))
    )
  }
}
