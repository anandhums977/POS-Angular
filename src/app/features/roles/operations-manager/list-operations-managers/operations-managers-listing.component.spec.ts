import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperationsManagersListingComponent } from './operations-managers-listing.component';

describe('OperationsManagersListingComponent', () => {
  let component: OperationsManagersListingComponent;
  let fixture: ComponentFixture<OperationsManagersListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OperationsManagersListingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OperationsManagersListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
