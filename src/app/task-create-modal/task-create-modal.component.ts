// task-create-modal.component.ts
import { Component, EventEmitter, Output,Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-task-create-modal',
  templateUrl: './task-create-modal.component.html',
  styleUrls: ['./task-create-modal.component.css']
})
export class TaskCreateModalComponent {
@Output() taskCreated = new EventEmitter<any>();
@Input() category: any; // Define categoryId input property

  taskName: string = '';
  taskDescription: string = '';
  taskDueDate: string;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    
  }

  saveTask() {
    // Create a new task object with the categoryId included
    const newTask = {
      name: this.taskName,
      description: this.taskDescription,
      dueDate: this.taskDueDate,
      category: this.category // Include categoryId in the task object
    };
   
    // Send the new task object to the backend
    this.http.post<any>('http://localhost:8080/task', newTask)
      .subscribe(response => {
        // Emit the response to notify the parent component that a new task has been created
        this.taskCreated.emit(response);
      }, error => {
        console.error('Error creating task:', error);
        // Handle error
      });
  }
  
}