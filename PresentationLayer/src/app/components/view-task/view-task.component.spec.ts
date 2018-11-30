import { RouterTestingModule } from '@angular/router/testing';
import { TaskManagerService } from './../../services/task-manager.service';
import { ViewTaskComponent } from './view-task.component';
import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

describe('ViewComponent', () => {
  let component: ViewTaskComponent;
  let fixture: ComponentFixture<ViewTaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ViewTaskComponent],
      imports: [BrowserModule, FormsModule, HttpClientModule, RouterTestingModule],
      providers: [TaskManagerService],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', inject([TaskManagerService], (service: TaskManagerService) => {
    expect(component).toBeTruthy();
  }));
});
