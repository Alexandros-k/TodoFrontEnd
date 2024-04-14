import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { HttpClientModule } from '@angular/common/http';
import { MatExpansionModule } from '@angular/material/expansion';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';





import { AppComponent } from './app.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { CategoryDetailsComponent } from './category-details/category-details.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskDetailsComponent } from './task-details/task-details.component';
import { CategoryFormComponent } from './category-form/category-form.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { TaskCreateModalComponent } from './task-create-modal/task-create-modal.component';
import { TaskUpdateModalComponent } from './task-update-modal/task-update-modal.component';



@NgModule({
  declarations: [
    AppComponent,
    CategoryListComponent,
    CategoryDetailsComponent,
    TaskListComponent,
    TaskDetailsComponent,
    CategoryFormComponent,
    TaskCreateModalComponent,
    TaskUpdateModalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatExpansionModule,
    MatDatepickerModule,
    MatGridListModule,
    MatButtonModule,
    MatFormFieldModule

  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
