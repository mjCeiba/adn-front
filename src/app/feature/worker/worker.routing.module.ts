import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WorkerCreateComponent } from './create/worker-create.component';
import { WorkerDetailComponent } from './detail/worker-detail.component';
import { WorkerComponent } from './worker/worker.component';

const routes: Routes = [
  {
    path: '',
    component: WorkerComponent
  },
  {
    path: 'create',
    component: WorkerCreateComponent
  },
  {
    path: ':id',
    component: WorkerDetailComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorkerRoutingModule { }
