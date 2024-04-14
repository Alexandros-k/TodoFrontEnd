import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent  {
  
  tasks: any[];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    //this.getTasks();
  }

  getTasks() {
    // this.http.get<any[]>(`/api/tasks?categoryId=${this.categoryId}`)
    //   .subscribe(response => {
    //     this.tasks = response;
    //   });
  }
}
