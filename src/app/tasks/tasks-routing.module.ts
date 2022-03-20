import {Routes} from "@angular/router";
import {ListTaskComponent} from "./list/list-task.component";
import {RegisterTaskComponent} from "./register/register-task.component";
import {EditTaskComponent} from "./edit/edit-task.component";

export const TaskRoutes: Routes = [
  {
    path: 'tasks',
    redirectTo: 'tasks/list'
  },
  {
    path: 'tasks/list',
    component: ListTaskComponent
  },
  {
    path: 'tasks/register',
    component: RegisterTaskComponent
  },
  {
    path: 'tasks/edit/:id',
    component: EditTaskComponent
  }
];
