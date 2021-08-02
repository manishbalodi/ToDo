import { Component, DoCheck, Injectable, Input, OnChanges, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TodoService } from 'src/app/services/todo.service';
import { TodoModel } from './todo.model';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
@Injectable()
export class TodosComponent implements OnInit , DoCheck  {

  @Input('data') data : TodoModel | undefined; 
  public todos : TodoModel[] = [];
  private do : Subscription | undefined;
  

  public catchData : Subscription | undefined;

  constructor(private todoService : TodoService) { }

  ngOnInit(): void {
    this.todos = this.todoService.getTodos();
    console.log(this.todos , "ngonit");
  }

  ngDoCheck(){
    this.todos = this.todoService.getTodos();
    console.log(this.todos , "ngDocheck");
  }

  onComplete(index : number){
    this.todoService.taskCompleted(index);
    //this.todos = this.todoService.getTodos();
  }

  onDelete(index : number){
    this.todoService.deleteTask(index);
    this.todos = this.todoService.getTodos();
  }

  onAdd(todo : TodoModel){
    this.todos = this.todoService.getTodos();
    //this.todos = this.todos;
    console.log(this.todos , "before");
    this.todoService.addTask(todo);
    // this.todos = this.todoService.getTodos();
    console.log(this.todos , "after");
  }
}
