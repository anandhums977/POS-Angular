import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperationsManagerDashboardComponent } from './operations-manager-dashboard.component';

describe('OperationsManagerDashboardComponent', () => {
  let component: OperationsManagerDashboardComponent;
  let fixture: ComponentFixture<OperationsManagerDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OperationsManagerDashboardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OperationsManagerDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
