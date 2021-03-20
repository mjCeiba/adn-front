import { Injectable } from '@angular/core';
import { Worker, WorkerDTO } from 'src/app/core/models/models';
import { HttpService } from 'src/app/core/services/http.service';
import { Observable } from 'rxjs';
import { URL_SERVICES } from 'src/environments/URL_SERVICES';

@Injectable()

export class WorkerService {

  constructor(protected _http: HttpService) { }

  public getAll(): Observable<Array<Worker>> {
    return this._http.doGet(URL_SERVICES.worker.getAll);
  }

  public getById(id: string): Observable<Worker> {
    return this._http.doGet(`${URL_SERVICES.worker.getById}${id}`);
  }

  public save(workerDTO: WorkerDTO): Observable<Worker> {
    return this._http.doPost(`${URL_SERVICES.worker.save}`, workerDTO);
  }
}