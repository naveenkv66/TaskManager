import { HttpClientModule } from '@angular/common/http';
import { TaskManagerService } from '../../services/task-manager.service';
import { AddTaskComponent } from './add-task.component';
import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';

describe('AddTaskComponent', () => {
  let component: AddTaskComponent;
  let fixture: ComponentFixture<AddTaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AddTaskComponent],
      imports: [BrowserModule, FormsModule, HttpClientModule, RouterTestingModule],
      providers: [TaskManagerService],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', inject([TaskManagerService], (service: TaskManagerService) => {
    expect(component).toBeTruthy();
  }));
});
