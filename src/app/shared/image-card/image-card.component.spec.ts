import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageCardComponent } from './image-card.component';

describe('ImageCardComponent', () => {
  let component: ImageCardComponent;
  let fixture: ComponentFixture<ImageCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ImageCardComponent]
    }).compileComponents();
    component.item = {
      id: "s",
      title: "tithle",
      urlImg: "",
      desc: "description"
    }
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
