import { Component, EventEmitter, Output, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-task-category-update-modal',
  templateUrl: './task-category-update-modal.component.html',
  styleUrl: './task-category-update-modal.component.css'
})
export class TaskCategoryUpdateModalComponent {
 @Output() taskCategoryUpdated = new EventEmitter<any>();
 @Input() category: any;

categoryName: string = '' ;
categoryDescription: string = '';

constructor( private http: HttpClient) { }

 ngOnInit() {
     }

  updateCategory() {
        const newCategory = {
          name: this.categoryName,
          description: this.categoryDescription
        };
        this.http.put<any>('http://localhost:8080/taskCategory/'+ this.category.id, newCategory)
          .subscribe(response => {
            this.taskCategoryUpdated.emit(response);
          }, error => {
            console.error('Error updating task:', error);
          });
      }

}
