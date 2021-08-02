import { Injectable } from "@angular/core";
import { TodoModel } from "../components/todos/todo.model";

@Injectable({providedIn : 'root'})
export class TodoService{
    public todos : TodoModel[] = [
        {title : 'Learn Angular' , content : 'complete the angular course' , completed : false},
        {title : 'create project' , content : 'create a todo app' , completed : false},
        {title : 'deploy' , content : 'deploy it on heroku' , completed : false},
        {title : 'add features' , content : 'add new features like apis' , completed : false}
      ];

      getTodos(){
          return this.todos.slice();
      }

      taskCompleted(index : number){
            this.todos[index].completed = !this.todos[index].completed;
            this.getTodos();
      }

      deleteTask(index : number){
          this.todos.splice(index,1);
      }

      addTask(todo : TodoModel){
        this.todos.push(todo);
        console.log(this.todos);
      }
}