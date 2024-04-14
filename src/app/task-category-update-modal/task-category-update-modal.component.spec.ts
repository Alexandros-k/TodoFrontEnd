import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskCategoryUpdateModalComponent } from './task-category-update-modal.component';

describe('TaskCategoryUpdateModalComponent', () => {
  let component: TaskCategoryUpdateModalComponent;
  let fixture: ComponentFixture<TaskCategoryUpdateModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TaskCategoryUpdateModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TaskCategoryUpdateModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
