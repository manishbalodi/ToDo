import { Component, ComponentFactoryResolver, OnInit, ViewChild } from '@angular/core';
import { PlaceholderDirective } from 'src/app/placeholder/placeholder.directive';
import { TodoformComponent } from '../todos/todoform/todoform.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @ViewChild(PlaceholderDirective ) todoFormHost : PlaceholderDirective | undefined;

  constructor(private cfResolver :ComponentFactoryResolver) { }

  ngOnInit(): void {
  }

  showAddForm(){
    const formPOpUpFactory = this.cfResolver.resolveComponentFactory(TodoformComponent);
    const hostViewContainerRef = this.todoFormHost?.viewContainerRef;
    hostViewContainerRef?.clear();
    hostViewContainerRef?.createComponent(formPOpUpFactory);
  }

}
