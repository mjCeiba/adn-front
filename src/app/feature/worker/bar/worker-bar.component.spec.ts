import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule } from '@angular/material/dialog';

import { WorkerBarComponent } from './worker-bar.component';

describe('WorkerBarComponent', () => {
  let component: WorkerBarComponent;
  let fixture: ComponentFixture<WorkerBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WorkerBarComponent],
      imports: [MatDialogModule]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkerBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
