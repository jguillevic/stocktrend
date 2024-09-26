import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegressionPage } from './regression.page';

describe('RegressionPage', () => {
  let component: RegressionPage;
  let fixture: ComponentFixture<RegressionPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RegressionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
