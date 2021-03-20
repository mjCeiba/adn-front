import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Task, Worker } from 'src/app/core/models/models';
import { HttpService } from 'src/app/core/services/http.service';
import { URL_SERVICES } from 'src/environments/URL_SERVICES';
import { CreateTaskComponent } from '../create/create-task.component';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.less']
})
export class TaskListComponent implements OnInit {

  @Input()
  tasks: Array<Task>;

  @Input()
  worker: any;

  @Output()
  update = new EventEmitter<string>();

  constructor(
    private readonly dialog: MatDialog,
    private readonly httpService: HttpService
  ) { }

  ngOnInit(): void {
  }

  public createNewTask() {
    this.dialog.open(CreateTaskComponent, { data: this.worker, minHeight: '500px', minWidth: '800px' })
      .afterClosed()
      .subscribe(change => {
        if (change) {
          this.update.emit(change)
        }
      })
  }

  public completeTask(task: Task) {
    this.httpService.doPost(`${URL_SERVICES.worker.taskComplete}`, { id: task._id })
      .subscribe((response: Worker) => {
        if (response.id) {
          this.update.emit(response.id);
        }
      })
  }

}
