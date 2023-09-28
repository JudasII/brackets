import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CombatesComponent } from './combates.component';

describe('CombatesComponent', () => {
  let component: CombatesComponent;
  let fixture: ComponentFixture<CombatesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CombatesComponent]
    });
    fixture = TestBed.createComponent(CombatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
