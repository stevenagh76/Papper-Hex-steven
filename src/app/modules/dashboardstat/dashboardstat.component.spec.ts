import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardstatComponent } from './dashboardstat.component';

describe('DashboardstatComponent', () => {
  let component: DashboardstatComponent;
  let fixture: ComponentFixture<DashboardstatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardstatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardstatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
