import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.css']
})
export class CategoryFormComponent {
  categoryName: string;
  categoryDescription: string;

  constructor(private http: HttpClient) { }

  onSubmit() {
    // Log to check if onSubmit method is getting called
    console.log('Form submitted');
    
    // Here you can implement the logic to handle the form submission
    // For example, you can send the category data to the backend API
    const categoryData = { name: this.categoryName, description: this.categoryDescription };
    this.http.post('http://localhost:8080/taskCategory', categoryData)
      .subscribe(response => {
        console.log('Category created successfully:', response);
        // Optionally, you can perform other actions after successful submission
      }, error => {
        console.error('Error creating category:', error);
        // Handle error, e.g., display error message to user
      });
  }

 

}
