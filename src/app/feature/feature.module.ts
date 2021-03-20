import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { WorkerModule } from './worker/worker.module';
import { TaskModule } from './task/task.module';
import { WorkerCreateComponent } from './worker/create/worker-create.component';

@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    CommonModule,
    WorkerModule,
    TaskModule
  ]
})
export class FeatureModule { }
