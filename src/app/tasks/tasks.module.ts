import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TaskService} from "./shared";
import { ListTaskComponent } from './list/list-task.component';


@NgModule({
  declarations: [
    ListTaskComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    TaskService
  ]
})
export class TasksModule {
}
