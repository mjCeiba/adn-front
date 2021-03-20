import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Worker } from 'src/app/core/models/models';
import { HttpService } from 'src/app/core/services/http.service';
import { URL_SERVICES } from 'src/environments/URL_SERVICES';

@Component({
  selector: 'app-detail',
  templateUrl: './worker-detail.component.html',
  styleUrls: ['./worker-detail.component.less']
})
export class WorkerDetailComponent implements OnInit {

  public worker: Worker;
  public taskCompleted: number = 0;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly httpService: HttpService) {
  }

  ngOnInit(): void {
    this.route.url.subscribe((url) => {
      this.fetchWorker(url[0].path);
    });
  }

  public async fetchWorker(id: string) {
    this.httpService.doGet(`${URL_SERVICES.worker.getById}${id}`)
      .subscribe((worker: Worker) => {
        this.worker = worker;
        this.getTaskCompleted();
      });
  }

  private getTaskCompleted() {
    this.worker.tasks.forEach(task => {
      if (task.done) {
        this.taskCompleted++;
      }
    })
  }

  public refreshPage(id: string) {
    this.fetchWorker(id);
  }
}
