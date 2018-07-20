import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartTrainingComponent } from './part-training.component';

describe('PartTrainingComponent', () => {
  let component: PartTrainingComponent;
  let fixture: ComponentFixture<PartTrainingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartTrainingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
