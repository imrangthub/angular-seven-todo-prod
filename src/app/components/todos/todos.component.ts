import { Component, OnInit } from '@angular/core';
import {Todo} from '../../models/Todo';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todosList : Todo [];


  constructor(
    private todoService:TodoService
  ) { }

  ngOnInit() {

    // this.todoService.getTodoListFromApi().subscribe(todos => {
    //   this.todosList = todos;
    // });

    this.todosList = this.todoService.getTodoList();
  }

  deleteTodo(todo:Todo){
   console.log(todo);
   this.todosList = this.todosList.filter(obj => obj.id !== todo.id);
   // for server side
  // this.todoService.deleteTodo(todo).subscribe();
  }

}
