import { Component, OnInit, Input  } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TaskCreateModalComponent } from '../task-create-modal/task-create-modal.component';
import { TaskUpdateModalComponent } from '../task-update-modal/task-update-modal.component';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrl: './category-list.component.css'
})
export class CategoryListComponent implements OnInit {
  @Input() categories: any[]; // Declare categories input property


  constructor(private http: HttpClient ,private modalService: NgbModal) { }

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
      // Handle error
    });
  }

  openTaskCreateModal(category: any) {
    const modalRef = this.modalService.open(TaskCreateModalComponent );
    modalRef.componentInstance.category = category;
    modalRef.componentInstance.taskCreated.subscribe(newTask => {
      this.getCategories();
      modalRef.close();
    });

  }

  deleteTask(id: number){
    this.http.delete<any>('http://localhost:8080/task/'+ id)
    .subscribe(response => {
      this.getCategories();
    }, error => {
      console.error('Error deleting task:', error);
      // Handle error
    });
  }

  openTaskUpdateModal(task: any) {

    const modalRef = this.modalService.open(TaskUpdateModalComponent );
    modalRef.componentInstance.task = task;
    modalRef.componentInstance.taskUpdated.subscribe(newTask => {
      this.getCategories();
      modalRef.close();
    });

  }


  }

