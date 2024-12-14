import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateZoneManagerComponent } from './create-zone-manager.component';

describe('CreateZoneManagerComponent', () => {
  let component: CreateZoneManagerComponent;
  let fixture: ComponentFixture<CreateZoneManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateZoneManagerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateZoneManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
