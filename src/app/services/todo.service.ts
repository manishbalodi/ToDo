import { Injectable } from "@angular/core";
import { TodoModel } from "../components/todos/todo.model";

@Injectable({providedIn : 'root'})
export class TodoService{
    public todos : TodoModel[] = [
        {title : 'title1' , content : 'complete the angular course' , completed : false},
        {title : 'title2' , content : 'create a project' , completed : false},
        {title : 'title3' , content : 'change company' , completed : false},
        {title : 'title1' , content : 'complete the angular course' , completed : false},
        {title : 'title2' , content : 'create a project' , completed : false},
        {title : 'title3' , content : 'change company' , completed : false}
      ];

      getTodos(){
          return this.todos.slice();
      }

      taskCompleted(index : number){
            this.todos[index].completed = !this.todos[index].completed;
            this.getTodos();
      }

      deleteTask(index : number){
        console.log(this.todos);
          this.todos.splice(index,1);
          this.getTodos();
          console.log(this.todos);
      }

      addTask(todo : TodoModel){
        this.todos.push(todo);
        console.log(this.todos);
      }
}