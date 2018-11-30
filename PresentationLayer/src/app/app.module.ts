import { AppRoute } from './app.route';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { UpdateTaskComponent } from './components/update-task/update-task.component';
import { ViewTaskComponent } from './components/view-task/view-task.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { InterceptorService } from './services/interceptor.service';
import { TaskManagerService } from './services/task-manager.service';

@NgModule({
  declarations: [
    AppComponent,
    AddTaskComponent,
    UpdateTaskComponent,
    ViewTaskComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoute
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true },
    TaskManagerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
