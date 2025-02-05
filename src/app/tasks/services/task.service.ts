import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';
import { Task } from '../interfaces/task.interfaces';
import { UserInfo } from '../interfaces/userInfo.interface';
import { User } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private API_URL: string = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) { }

  public GettingAllTasks(): Observable<Task[]> {
    const API_TODO = `${this.API_URL}/todos`
    return this.http.get<Task[]>(API_TODO).pipe(
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

  public GettingUserById(id: number): Observable<UserInfo> {
    const API_USER = `${this.API_URL}/users/${id}`;

    return this.http.get<User>(API_USER).pipe(
      map(({id, name, username, email, phone, company}) =>
        ({
          id,
          name,
          username,
          email,
          phone,
          companyName: company.name

        })
      ),
      catchError(error => of({id: 0, name: '', username: '', email: '', phone: '', companyName: ''}))
    )
  }
}
