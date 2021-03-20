import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskListComponent } from './task-list/task-list.component';
import { CreateTaskComponent } from './create/create-task.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    TaskListComponent,
    CreateTaskComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MatSnackBarModule],
  exports: [TaskListComponent],
  entryComponents: [CreateTaskComponent]
})
export class TaskModule { }
