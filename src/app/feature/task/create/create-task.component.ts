import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Worker } from 'src/app/core/models/models';
import { HttpService } from 'src/app/core/services/http.service';
import { URL_SERVICES } from 'src/environments/URL_SERVICES';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.less']
})
export class CreateTaskComponent implements OnInit {

  public descriptionControl = new FormControl('', [Validators.required]);

  constructor(
    public dialogRef: MatDialogRef<CreateTaskComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { name: string, id: string },
    private readonly httpService: HttpService,
    private readonly _snackBar: MatSnackBar,
  ) { }

  ngOnInit(): void { }

  public onCreate() {
    if (this.descriptionControl.valid) {
      const body = {
        id: this.data.id,
        tasks: [
          {
            description: this.descriptionControl.value,
            createdDate: new Date()
          }
        ]
      }
      this.httpService.doPost(`${URL_SERVICES.worker.addTask}`, body)
        .subscribe((response: Worker) => {
          if (response.id) {
            this.dialogRef.close(response.id);
            this._snackBar.open(`Taks created`, '', { duration: 700 })
          }
        });
    }
  }

  public onCancel() {
    this.dialogRef.close()
  }

}
