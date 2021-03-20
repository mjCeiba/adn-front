import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Worker } from 'src/app/core/models/models';
import { ImageCard } from 'src/app/shared/image-card/image-card.component';
import { WorkerService } from '../services/worker.service';

const FARMER_IMG_PATH = '../../../assets/farmer-no-bg.png';

@Component({
  selector: 'app-worker',
  templateUrl: './worker.component.html',
  styleUrls: ['./worker.component.less']
})
export class WorkerComponent implements OnInit {

  workers: Array<Worker> = [];
  imageCards: Array<ImageCard> = [];

  constructor(
    private readonly workerService: WorkerService,
    private readonly router: Router
  ) { }

  ngOnInit(): void {
    this.fetchWorkers();
  }

  private async fetchWorkers() {
    this.workers
    this.workerService.getAll().subscribe(workers => {
      this.workers = workers;
      this.fillImageCards();
    });
  }

  public onReciveWorker(worker: ImageCard) {
    this.router.navigateByUrl(`worker/${worker.id}`);
  }

  private fillImageCards() {
    this.workers.map(worker => {
      const imageCard: ImageCard = {
        title: worker.name,
        urlImg: FARMER_IMG_PATH,
        desc: `Phone: ${worker.phone}`,
        id: worker.id
      }
      this.imageCards.push(imageCard)
    });
  }

  public onRefresh(event) {
    this.workers = [];
    this.imageCards = [];
    this.fetchWorkers();
  }
}
