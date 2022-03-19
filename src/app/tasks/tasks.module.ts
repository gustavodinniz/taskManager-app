import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {TaskService} from "./shared";
import {ListTaskComponent} from './list/list-task.component';
import { RegisterTaskComponent } from './register/register-task.component';


@NgModule({
  declarations: [
    ListTaskComponent,
    RegisterTaskComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  providers: [
    TaskService
  ]
})
export class TasksModule {
}
