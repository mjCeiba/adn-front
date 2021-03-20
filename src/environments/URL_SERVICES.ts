import { environment } from './environment';

export const URL_SERVICES = {
  worker: {
    getAll: `${environment.URI}/worker`,
    getById: `${environment.URI}/worker/get?id=`,
    save: `${environment.URI}/worker/save`,
    addTask: `${environment.URI}/worker/addTask`,
    taskComplete: `${environment.URI}/worker/setTaskDone`,
  }
}