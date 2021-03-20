import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpService } from 'src/app/core/services/http.service';

import { WorkerDetailComponent } from './worker-detail.component';

describe('DetailComponent', () => {
  let component: WorkerDetailComponent;
  let fixture: ComponentFixture<WorkerDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkerDetailComponent ],
      imports:[
        RouterTestingModule,
        // {provide: HttpService, useClass: WorkerServiceTest}
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkerDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
