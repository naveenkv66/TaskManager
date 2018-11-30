import { Injectable } from '@angular/core';
import 'rxjs/Rx'
import { Observable } from 'rxjs'
import { TaskManager } from '../models/task-manager.model'
import { HttpClient } from '@angular/common/http';
import { TaskManagerApi } from '../constant/task-manager-api';

@Injectable()
export class TaskManagerService {
  constructor(private _http: HttpClient) { }  
  sharedTaskID: number;

  changesharedTaskID(newTaskId: number) {
    this.sharedTaskID = newTaskId;
  }

  getsharedTaskID() {
    return this.sharedTaskID;
  }

  GetTask(): Observable<TaskManager[]> {
    return this._http.get(TaskManagerApi.GET_TASK)
      .map(response => { return response })
      .catch(error => Observable.throw(error))
  }

  GetParentTasks(taskId): Observable<string[]> {
    return this._http.get(`${TaskManagerApi.GET_PARENT_TASK}/${taskId}`)
      .map(response => { return response })
      .catch(error => Observable.throw(error))
  }

  GetTaskById(taskId): Observable<TaskManager> {
    return this._http.get(`${TaskManagerApi.GET_TASK}/${taskId}`)
      .map(response => { return response })
      .catch(error => Observable.throw(error))
  }

  AddTask(task) {
    let body = JSON.stringify(task);
    return this._http.post(TaskManagerApi.ADD_TASK, body)
      .catch(error => Observable.throw(error));
  }

  UpdateTask(task) {
    let body = JSON.stringify(task);
    return this._http.post(TaskManagerApi.UPDATE_TASK, body)
      .catch(error => Observable.throw(error));
  }

  EndTask(taskId) {
    let body = JSON.stringify(taskId);
    return this._http.post(TaskManagerApi.END_TASK, body)
      .map(response => { return response })
      .catch(error => Observable.throw(error));
  }
}
