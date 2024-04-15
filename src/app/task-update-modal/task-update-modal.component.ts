import { Component, EventEmitter, Output, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-task-update-modal',
  templateUrl: './task-update-modal.component.html',
  styleUrl: './task-update-modal.component.css'
})
export class TaskUpdateModalComponent {
  @Output() taskUpdated = new EventEmitter<any>();
  @Input() task: any;

    taskName: string = '';
    taskDescription: string = '';
    taskDueDate: string;

    constructor(private http: HttpClient) {}

    ngOnInit() {
     }

    updateTask() {
      const newTask = {
        id: this.task.id,
        name: this.taskName,
        description: this.taskDescription,
        deadline: new Date(this.taskDueDate),
      };

      this.http.put<any>('http://localhost:8080/task/'+ this.task.task.id, newTask)
        .subscribe(response => {
          this.taskUpdated.emit(response);
        }, error => {
          console.error('Error updating task:', error);
        });
    }
}
