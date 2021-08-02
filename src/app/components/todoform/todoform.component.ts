import { HttpClient } from '@angular/common/http';
import { Component, ComponentFactoryResolver, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TodoService } from 'src/app/services/todo.service';
import { TodoModel } from '../todos/todo.model';
import { TodosComponent } from '../todos/todos.component';

@Component({
  selector: 'app-todoform',
  templateUrl: './todoform.component.html',
  styleUrls: ['./todoform.component.css']
})
export class TodoformComponent implements OnInit {

  todoForm : FormGroup;
  @Output() close = new EventEmitter<void>();


  constructor(private todoService : TodoService , private form : TodosComponent  , private http : HttpClient) 
  { this.todoForm = new FormGroup({
    'title' : new FormControl('',Validators.required),
    'content' : new FormControl('')
  });}

  ngOnInit(): void {

    
  }

  onCancel(){
    this.close.emit();
  }

  onSubmit(){
    let todo : TodoModel = {
      title : this.todoForm.value.title,
      content : this.todoForm.value.content,
      completed : false
    };
    console.log(todo);
    this.form.onAdd(todo);
    this.todoForm.reset();
  }

}
