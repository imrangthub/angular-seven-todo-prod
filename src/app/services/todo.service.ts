import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Todo } from '../models/Todo';

const httpOption = {
  headers : new HttpHeaders({
   'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todsUrl:string =  'https://jsonplaceholder.typicode.com/todos?_limit=5';

  constructor(
    private http:HttpClient
  ) { }

  getTodoListFromApi():Observable<Todo[]> {
    return this.http.get<Todo[]>(this.todsUrl);
  }

  toggleComplate(todo:Todo):Observable<any>{
    const url = `${this.todsUrl}/${todo.id}`;
    return this.http.put(url,  todo, httpOption);
  }

  deleteTodo(todo:Todo):Observable<Todo> {
    const url =`${this.todsUrl}/${todo.id}`;
    return this.http.delete<Todo>(url, httpOption);
  }

  getTodoList(){
    return [
      {
        id : 1,
        title : 'Todo One',
        completed : false
      },
      {
        id : 2,
        title : 'Todo Two',
        completed : true
      },
      {
        id : 3,
        title : 'Todo Three',
        completed : false
      }
    ]
  }



}
