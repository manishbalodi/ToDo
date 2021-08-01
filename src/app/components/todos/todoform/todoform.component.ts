import { Component, ComponentFactoryResolver, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TodoService } from 'src/app/services/todo.service';
import { TodoModel } from '../todo.model';

@Component({
  selector: 'app-todoform',
  templateUrl: './todoform.component.html',
  styleUrls: ['./todoform.component.css']
})
export class TodoformComponent implements OnInit {

  todoForm : FormGroup;
  @Output() close = new EventEmitter<void>();

  constructor(private todoService : TodoService) 
  { this.todoForm = new FormGroup({
    'title' : new FormControl('',Validators.required),
    'content' : new FormControl('')
    //'completed' : new FormControl(false)
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
    this.todoService.addTask(todo);
    this.todoForm.reset();
  }

}
