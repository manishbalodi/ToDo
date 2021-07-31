import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-todoform',
  templateUrl: './todoform.component.html',
  styleUrls: ['./todoform.component.css']
})
export class TodoformComponent implements OnInit {

  todoForm : FormGroup;

  constructor() { }

  ngOnInit(): void {
  }

  onCancel(){

  }

  onSubmit(){}

}
