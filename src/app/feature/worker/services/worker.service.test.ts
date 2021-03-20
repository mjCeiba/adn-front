import { Injectable } from '@angular/core';
import { Worker, WorkerDTO } from 'src/app/core/models/models';
import { Observable, of } from 'rxjs';
import { URL_SERVICES } from 'src/environments/URL_SERVICES';

export class WorkerServiceTest {

  public getAll(): Observable<Array<Worker>> {
    const data: Array<Worker> = [
      {
        active: true,
        balance: 5,
        id: 'asdjklhqui1os',
        name: 'Manuel',
        phone: '3046497409',
        tasks: [
          {
            _id: "asda",
            description: "desc",
            done: false,
            taskCreationDate: new Date,
            taskDoneStatusDate: new Date
          }
        ]
      }
    ];
    return of(data);
  }

  public getById(id: string): Observable<Worker> {
    const data: Worker = {
      active: true,
      balance: 5,
      id: 'asdjklhqui1os',
      name: 'Manuel',
      phone: '3046497409',
      tasks: [
        {
          _id: "asda",
          description: "desc",
          done: false,
          taskCreationDate: new Date,
          taskDoneStatusDate: new Date
        }
      ]
    }
    return of(data);
  }

  public save(workerDTO: WorkerDTO): Observable<Worker> {
    const data: Worker = {
      active: true,
      balance: 5,
      id: 'asdjklhqui1os',
      name: workerDTO.name,
      phone: workerDTO.phone,
      tasks: []
    }
    return of(data);
  }
}