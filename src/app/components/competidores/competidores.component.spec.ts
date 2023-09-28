import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetidoresComponent } from './competidores.component';

describe('CompetidoresComponent', () => {
  let component: CompetidoresComponent;
  let fixture: ComponentFixture<CompetidoresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompetidoresComponent]
    });
    fixture = TestBed.createComponent(CompetidoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
