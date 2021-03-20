export class MenuItem {
    url: string;
    label: string;
}

export class Worker {
    id: string;
    name: string;
    phone: string;
    active: boolean;
    balance: number;
    tasks: Array<Task>;
}

export class Task {
    _id: string;
    description: string;
    taskCreationDate: Date;
    taskDoneStatusDate: Date;
    done: boolean;
}

export class WorkerDTO {
    name: string;
    phone: string;
}
