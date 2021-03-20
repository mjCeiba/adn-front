import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule } from '@angular/material/dialog';

import { WorkerCreateComponent } from './worker-create.component';

describe('CreateComponent', () => {
  let component: WorkerCreateComponent;
  let fixture: ComponentFixture<WorkerCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WorkerCreateComponent],
      imports: [MatDialogModule]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkerCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
