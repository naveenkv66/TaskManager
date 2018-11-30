import { TaskManager } from './../../models/task-manager.model';
import { TaskManagerService } from './../../services/task-manager.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  Task: string;
  TaskId: number;
  Priority: number;
  ParentTask: string;
  StartDate: Date;
  EndDate: Date;
  ParentTaskList: string[];
  obj: TaskManager;
  showTaskReqError: boolean;
  showStDateReqError: boolean;
  showEndDateReqError: boolean;
  addSuccess: boolean;
  minDate: string;

  constructor(private _taskService: TaskManagerService) {
    this.Priority = 0;
    this.minDate = new Date().toISOString().split('T')[0];
  }

  ngOnInit() {
    this.GetParentTasks();
  }

  GetParentTasks() {
    this._taskService.GetParentTasks(this.TaskId)
      .subscribe(res => {
        this.ParentTaskList = res;
      });
  }

  ResetTask() {
    this.Task = undefined;
    this.ParentTask = undefined;
    this.Priority = 0;
    this.StartDate = undefined;
    this.EndDate = undefined;
  }

  AddTask() {
    this.obj = new TaskManager();
    var error = false;
    if (this.Task) {
      this.obj.Task = this.Task;
      this.showTaskReqError = false;
    }
    else {
      this.showTaskReqError = true;
      error = true;
    }
    this.obj.ParentTask = this.ParentTask;
    this.obj.Priority = this.Priority;
    if (this.StartDate) {
      this.obj.StartDate = this.StartDate;
      this.showStDateReqError = false;
    }
    else {
      this.showStDateReqError = true;
      error = true;
    }
    if (this.EndDate) {
      this.obj.EndDate = this.EndDate;
      this.showEndDateReqError = false;
    }
    else {
      this.showEndDateReqError = true;
      error = true;
    }
    if (!error) {
      this._taskService.AddTask(this.obj)
        .subscribe((data: any) => {
          console.log(data);
          this.addSuccess = true;
          this.Task = '';
          this.ParentTask = '';
          this.Priority = 0;
          this.StartDate = new Date();
          this.EndDate = new Date();
          this.GetParentTasks();
        }, error => {
          console.log(error);
          this.addSuccess = false;
        });
    }
  }

}

