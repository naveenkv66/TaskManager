import { ViewTaskComponent } from './components/view-task/view-task.component';
import { UpdateTaskComponent } from './components/update-task/update-task.component';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { RouterModule, Routes } from '@angular/router'

const appRoutes: Routes = [
    { path: '', redirectTo: 'view', pathMatch: 'full' },
    { path: 'add', component: AddTaskComponent },
    { path: 'edit', component: UpdateTaskComponent },
    { path: 'view', component: ViewTaskComponent }
]

export const AppRoute = RouterModule.forRoot(appRoutes);