import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Todo } from 'src/app/models/Todo';
import { TodoService } from 'src/app/services/todo.service';


@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo : Todo;
  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter();

  constructor(
    private todoService:TodoService
  ) { }

  ngOnInit() {
    console.log(this.todo);
  }

  onToggle(todo){
    console.log(todo);
    // Toggle in UI
    todo.completed = !todo.completed;

    // Toggle on Server
    this.todoService.toggleComplate(todo).subscribe( todo =>{
      console.log(todo);
    });
  }

  onDelete(todo){
    //console.log(todo );
    this.deleteTodo.emit(todo);
  }

  

  // Set Dynamic Class
  setClasses(){
    let classes = {
      todo: true,
      'is-complate': this.todo.completed
    }
    return classes;
  }
 
}
