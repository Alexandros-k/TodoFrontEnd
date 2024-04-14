// import { Component, OnInit } from '@angular/core';
// import { HttpClient } from '@angular/common/http';

// @Component({
//   selector: 'app-task-form',
//   templateUrl: './task-form.component.html',
//   styleUrls: ['./task-form.component.css']
// })
// export class TaskFormComponent implements OnInit {
//   taskName: string;
//   selectedCategory: number;
//   categories: any[]; // Assuming you have a list of categories available

//   constructor(private http: HttpClient) { }

//   ngOnInit() {
//     // Fetch categories from backend upon component initialization
//     this.http.get<any[]>('/api/categories')
//       .subscribe(response => {
//         this.categories = response;
//       });
//   }

//   onSubmit() {
//     const taskData = {
//       name: this.taskName,
//       categoryId: this.selectedCategory
//     };

//     this.http.post('/api/tasks', taskData)
//       .subscribe(response => {
//         console.log('Task created successfully:', response);
//         // Optionally, you can redirect to task list or perform other actions
//       }, error => {
//         console.error('Error creating task:', error);
//         // Handle error, e.g., display error message to user
//       });
//   }
// }
