import { Component, ComponentFactoryResolver, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private cfResolver :ComponentFactoryResolver) { }

  ngOnInit(): void {
  }

  showAddForm(){
    //this.cfResolver.resolveComponentFactory();
  }

}
