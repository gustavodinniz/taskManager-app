import {Component, OnInit} from '@angular/core';
import {Task, TaskService} from '../shared'

@Component({
  selector: 'app-list-task',
  templateUrl: './list-task.component.html',
  styleUrls: ['./list-task.component.css']
})
export class ListTaskComponent implements OnInit {

  tasks: Task[];

  constructor(private taskService: TaskService) {
  }

  ngOnInit(): void {
    this.tasks = this.listAll();
  }

  listAll(): Task[] {
    return this.taskService.listAll();
  }

  remove($event: any, task: Task): void {
    $event.preventDefault();
    if (confirm('Deseja remover a Tarefa "' + task.name + '"?')) {
      this.taskService.remove(task.id);
      this.tasks = this.listAll();
    }
  }

  changeStatus(task: Task): void {
    if (confirm('Deseja alterar o status da Tarefa "' + task.name + '"?')) {
      this.taskService.changeStatus(task.id);
      this.tasks = this.listAll();
    }
  }

}
