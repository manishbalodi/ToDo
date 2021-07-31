import { Component, OnChanges, OnInit } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';
import { TodoModel } from './todo.model';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit , OnChanges {

  public todos : TodoModel[] = [];

  constructor(private todoService : TodoService) { }

  ngOnInit(): void {
    this.todos = this.todoService.getTodos();
  }

  ngOnChanges(){
    this.todos = this.todoService.getTodos();
  }

  onComplete(index : number){
    this.todoService.taskCompleted(index);
  }

  onDelete(index : number){
    this.todoService.deleteTask(index);
  }
}
