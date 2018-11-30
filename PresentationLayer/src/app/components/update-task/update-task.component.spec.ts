import { TaskManagerService } from './../../services/task-manager.service';
import { UpdateTaskComponent } from './update-task.component';
import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';

describe('UpdateTaskComponent', () => {
  let component: UpdateTaskComponent;
  let fixture: ComponentFixture<UpdateTaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateTaskComponent],
      imports: [BrowserModule, FormsModule, HttpClientModule, RouterTestingModule],
      providers: [TaskManagerService],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', inject([TaskManagerService], (service: TaskManagerService) => {
    expect(component).toBeTruthy();
  }));
});
