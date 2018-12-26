import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComptesDetailsComponent } from './comptes-details.component';

describe('ComptesDetailsComponent', () => {
  let component: ComptesDetailsComponent;
  let fixture: ComponentFixture<ComptesDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComptesDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComptesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
