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
 categories: any[];

  constructor(private http: HttpClient) { }

  onSubmit() {
    const categoryData = { name: this.categoryName, description: this.categoryDescription };
    this.http.post('http://localhost:8080/taskCategory', categoryData)
      .subscribe(response => {
          this.fetchCategories();
      }, error => {
        console.error('Error creating category:', error);
      });
  }

  private fetchCategories() {
    this.http.get<any[]>('http://localhost:8080/taskCategory')
      .subscribe(categories => {
        this.categories = categories;
        console.log('Categories fetched successfully:', categories);
      }, error => {
        console.error('Error fetching categories:', error);
      });
  }

}
