import { NgModule } from '@angular/core';
import { WorkerService } from './services/worker.service';
import { WorkerCreateComponent } from './create/worker-create.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { WorkerDetailComponent } from './detail/worker-detail.component';
import { WorkerRoutingModule } from './worker.routing.module';
import { WorkerComponent } from './worker/worker.component';
import { MatDialogModule, MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog'
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { WorkerBarComponent } from './bar/worker-bar.component';
import { CommonModule } from '@angular/common';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { TaskModule } from '../task/task.module';

const COMPONENTS = [
  WorkerComponent,
  WorkerCreateComponent,
  WorkerDetailComponent,
  WorkerBarComponent,
]

@NgModule({
  declarations: COMPONENTS,
  exports: COMPONENTS,
  imports: [
    SharedModule,
    WorkerRoutingModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatFormFieldModule,
    CommonModule,
    FormsModule,
    MatSnackBarModule,
    TaskModule
  ],
  providers: [
    WorkerService,
    { provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: { hasBackdrop: true } }
  ],
  entryComponents: [
    WorkerCreateComponent
  ],
})
export class WorkerModule { }