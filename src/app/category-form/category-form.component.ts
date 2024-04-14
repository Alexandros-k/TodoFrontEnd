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
 categories: any[]; // Define categories array to store fetched categories

  constructor(private http: HttpClient) { }

  onSubmit() {
    // Log to check if onSubmit method is getting called
    console.log('Form submitted');

    // Here you can implement the logic to handle the form submission
    // For example, you can send the category data to the backend API
    const categoryData = { name: this.categoryName, description: this.categoryDescription };
    this.http.post('http://localhost:8080/taskCategory', categoryData)
      .subscribe(response => {

            this.fetchCategories();

      }, error => {
        console.error('Error creating category:', error);
        // Handle error, e.g., display error message to user
      });
  }

  private fetchCategories() {
    this.http.get<any[]>('http://localhost:8080/taskCategory')
      .subscribe(categories => {
        // Update categories in your component
        this.categories = categories;
        console.log('Categories fetched successfully:', categories);
      }, error => {
        console.error('Error fetching categories:', error);
        // Handle error, e.g., display error message to user
      });
  }


}
