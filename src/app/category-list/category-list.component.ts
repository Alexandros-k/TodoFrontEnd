import { Component, OnInit, Input  } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TaskCreateModalComponent } from '../task-create-modal/task-create-modal.component';
import { TaskUpdateModalComponent } from '../task-update-modal/task-update-modal.component';
import { MatDialog } from '@angular/material/dialog';
import { TaskCategoryUpdateModalComponent } from '../task-category-update-modal/task-category-update-modal.component';
import {MatTableModule} from '@angular/material/table';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrl: './category-list.component.css'
})
export class CategoryListComponent implements OnInit {
  @Input() categories: any[];
 displayedColumns: string[] = ['name', 'description','actions'];
  displayedColumnsTasks: string[] = ['name', 'description','deadline','actions'];
  constructor(private http: HttpClient ,private modalService: NgbModal, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories() {
    this.http.get<any[]>('http://localhost:8080/taskCategory')
      .subscribe(response => {
        this.categories = response;
      });
  }

  deleteCategory(id: number){
    this.http.delete<any>('http://localhost:8080/taskCategory/'+ id)
    .subscribe(response => {
      this.getCategories();
    }, error => {
      console.error('Error deleting taskCategory:', error);
    });
  }

    deleteTask(id: number){
    this.http.delete<any>('http://localhost:8080/task/'+ id)
    .subscribe(response => {
      this.getCategories();
    }, error => {
      console.error('Error deleting task:', error);
    });
  }

  openTaskUpdateModal(task: any) {
    const dialogRef = this.dialog.open(TaskUpdateModalComponent );
    dialogRef.componentInstance.task = task;
    dialogRef.componentInstance.taskUpdated.subscribe(newTask => {
      this.getCategories();
      dialogRef.close();
    });
  }

  openTaskCreateModal(category: any) {
      const dialogRef = this.dialog.open(TaskCreateModalComponent );
      dialogRef.componentInstance.category = category;
      dialogRef.componentInstance.taskCreated.subscribe(newTask => {
        this.getCategories();
        dialogRef.close();
      });
    }

  openUpdateCategoryModal(category: any): void {
      const dialogRef = this.dialog.open(TaskCategoryUpdateModalComponent );
   dialogRef.componentInstance.category = category;
 dialogRef.componentInstance.taskCategoryUpdated.subscribe(newCategory => {
      this.getCategories();
      dialogRef.close();
    });
  }

}

