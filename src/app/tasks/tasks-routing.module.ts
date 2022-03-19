import {Routes} from "@angular/router";
import {ListTaskComponent} from "./list/list-task.component";

export const TaskRoutes: Routes = [
  {
    path: 'tasks',
    redirectTo: 'tasks/list'
  },
  {
    path: 'tasks/list',
    component: ListTaskComponent
  }
];
