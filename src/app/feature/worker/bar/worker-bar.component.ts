import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { WorkerCreateComponent } from '../create/worker-create.component';

@Component({
  selector: 'app-bar',
  templateUrl: './worker-bar.component.html',
  styleUrls: ['./worker-bar.component.less']
})
export class WorkerBarComponent implements OnInit {

  @Output()
  refresh = new EventEmitter<boolean>();

  constructor(
    private readonly dialog: MatDialog
  ) { }

  ngOnInit(): void { }

  public onCreateWorker(): void {
    this.dialog.open(WorkerCreateComponent)
      .afterClosed()
      .subscribe(modalClosed => {
        this.refresh.emit(true)
      })
  }

}
