import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-active-list',
  templateUrl: './active-list.component.html',
  styleUrls: ['./active-list.component.css']
})
export class ActiveListComponent implements OnInit {
  title: string;
  toDoItems: string[];

  constructor() {
    this.title = 'Active List';
    this.toDoItems = [];
  }

  ngOnInit() {
  }

}
