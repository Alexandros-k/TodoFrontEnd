import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-category-details',
  templateUrl: './category-details.component.html',
  styleUrls: ['./category-details.component.css']
})
export class CategoryDetailsComponent {
  @Input() category: any;
  // Add more inputs for other category details if needed
}
