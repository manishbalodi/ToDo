import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-todoform',
  templateUrl: './todoform.component.html',
  styleUrls: ['./todoform.component.css']
})
export class TodoformComponent implements OnInit {

  todoForm : FormGroup;

  constructor() { this.todoForm = new FormGroup({
    'name' : new FormControl('',Validators.required),
    'content' : new FormControl('')
    //'completed' : new FormControl(false)
  });}

  ngOnInit(): void {

    
  }

  onCancel(){

  }

  onSubmit(){}

}
