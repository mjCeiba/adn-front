import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Worker, WorkerDTO } from 'src/app/core/models/models';
import { HttpService } from 'src/app/core/services/http.service';
import { URL_SERVICES } from 'src/environments/URL_SERVICES';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-create',
  templateUrl: './worker-create.component.html',
  styleUrls: ['./worker-create.component.less']
})
export class WorkerCreateComponent implements OnInit {

  workerForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.minLength(10), Validators.maxLength(10)]),
  });

  constructor(
    public dialogRef: MatDialogRef<WorkerCreateComponent>,
    public readonly hhtpService: HttpService,
    private _snackBar: MatSnackBar
  ) { }


  ngOnInit(): void { }

  public onCancel() {
    this.dialogRef.close(false)
  }

  public onCreate() {
    this.workerForm.value.phone = this.workerForm.value.phone.toString();

    if (this.workerForm.valid && this.workerForm.value.phone.length === 10) {
      this.saveWorker(this.workerForm.value);
    } else {
      this._snackBar.open(`Invalid form`, '', { duration: 700 })
    }
  }

  public saveWorker(worker: WorkerDTO) {
    this.hhtpService.doPost(`${URL_SERVICES.worker.save}`, worker)
      .subscribe((workerCreated: Worker) => {
        if (workerCreated.id) {
          this._snackBar.open(`Worker ${workerCreated.name} was created successfully`, '', { duration: 700 })
          this.dialogRef.close()
        } else {
          this._snackBar.open(`Worker was not created`, '', { duration: 700 })
        }
      });
  }

}
