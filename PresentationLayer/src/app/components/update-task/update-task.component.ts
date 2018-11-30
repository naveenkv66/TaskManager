import { TaskManager } from './../../models/task-manager.model';
import { TaskManagerService } from './../../services/task-manager.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-task',
  templateUrl: './update-task.component.html',
  styleUrls: ['./update-task.component.css']
})
export class UpdateTaskComponent implements OnInit {
  Task: string;
  Priority: number;
  ParentTask: string;
  StartDate: Date;
  EndDate: Date;
  taskId: number;
  obj: TaskManager;
  ParentTaskList: string[];
  showTaskReqError: boolean;
  showStDateReqError: boolean;
  showEndDateReqError: boolean;
  updateSuccess: boolean;
  minDate: string;

  constructor(private _taskService: TaskManagerService, private route: ActivatedRoute) {
    this.minDate = new Date().toISOString().split('T')[0];
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.taskId = +params["id"];
    });
    this.GetTaskById(this.taskId);
    this.GetParentTasks(this.taskId);
  }

  GetParentTasks(taskId) {
    this._taskService.GetParentTasks(taskId)
      .subscribe(res => {
        this.ParentTaskList = res;
      });
  }

  GetTaskById(taskId) {
    this._taskService.GetTaskById(taskId)
      .subscribe(res => {
        this.obj = res;
        if (this.obj != undefined) {
          this.Task = this.obj.Task;
          this.Priority = this.obj.Priority;
          this.ParentTask = this.obj.ParentTask;
          this.StartDate = this.obj.StartDate;
          this.EndDate = this.obj.EndDate;
        }
      });
  }

  UpdateTask() {
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
    this.obj.TaskID = this.taskId;
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
      this._taskService.UpdateTask(this.obj)
        .subscribe((data: any) => {
          console.log(data);
          this.updateSuccess = true;
        }, error => {
          console.log(error);
          this.updateSuccess = false;
        });
    }
  }
}

