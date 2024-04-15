import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule  } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatExpansionModule } from '@angular/material/expansion';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import {MatTableModule} from '@angular/material/table';

import { AppComponent } from './app.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { CategoryDetailsComponent } from './category-details/category-details.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskDetailsComponent } from './task-details/task-details.component';
import { CategoryFormComponent } from './category-form/category-form.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { TaskCreateModalComponent } from './task-create-modal/task-create-modal.component';
import { TaskUpdateModalComponent } from './task-update-modal/task-update-modal.component';
import { TaskCategoryUpdateModalComponent } from './task-category-update-modal/task-category-update-modal.component';
import {MatDividerModule} from '@angular/material/divider';



@NgModule({
  declarations: [
    AppComponent,
    CategoryListComponent,
    CategoryDetailsComponent,
    TaskListComponent,
    TaskDetailsComponent,
    CategoryFormComponent,
    TaskCreateModalComponent,
    TaskUpdateModalComponent,
    TaskCategoryUpdateModalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatExpansionModule,
    MatDatepickerModule,
    MatGridListModule,
    MatButtonModule,
    MatFormFieldModule,
    MatDialogModule,
    MatTableModule,
    MatDividerModule

  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
